import ReceivablePacket from "./ReceivablePacket";
import IPacketHandler from "./IPacketHandler";
import { GlobalEvents } from "./EventEmitter";
import IConnection from "./IConnection";
import Logger from "./Logger";
import MMOSession from "./MMOSession";
import IProcessable from "./IProcessable";
import SendablePacket from "./SendablePacket";

export default abstract class MMOClient implements IProcessable {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  private _connection!: IConnection;

  private _packetHandler!: IPacketHandler<MMOClient>;

  private _session: MMOSession = new MMOSession();

  abstract encrypt(data: Uint8Array, offset: number, size: number): void;

  abstract decrypt(data: Uint8Array, offset: number, size: number): void;

  abstract sendPacket(packet: SendablePacket<this>): void;

  abstract pack(packet: SendablePacket<this>): Uint8Array;

  get Session(): MMOSession {
    return this._session;
  }

  set Session(sess: MMOSession) {
    this._session = sess;
  }

  get Connection(): IConnection {
    return this._connection;
  }

  set Connection(conn: IConnection) {
    this._connection = conn;
  }

  get PacketHandler(): IPacketHandler<MMOClient> {
    return this._packetHandler;
  }

  set PacketHandler(handler: IPacketHandler<MMOClient>) {
    this._packetHandler = handler;
  }

  private _buffer: Uint8Array = new Uint8Array();

  connect(): Promise<void> {
    return this._connection.connect();
  }

  process(raw: Uint8Array): Promise<ReceivablePacket<MMOClient>> {

    return new Promise((resolve, reject) => {

      let data: Uint8Array = new Uint8Array(raw);
      if (this._buffer.byteLength > 0) {
        data = new Uint8Array(raw.byteLength + this._buffer.byteLength);
        data.set(this._buffer, 0);
        data.set(raw, this._buffer.byteLength);
        this._buffer = new Uint8Array();
      }

      let i = 0;
      while (i < data.byteLength) {
        const packetLength = data[i] + (data[i + 1] << 8);

        if (packetLength <= 2) {
          break;
        }

        if (i + packetLength > data.byteLength) {
          this._buffer = data.slice(i);
          reject("incomplete packet");
          break;
        }

        ((n, ctx) => {
          const packetData = new Uint8Array(data.slice(n + 2, n + packetLength)); // +2 is for skipping the packet size
          ctx.decrypt(packetData, 0, packetData.byteLength);

          setTimeout(() => {
            const rcp: ReceivablePacket<MMOClient> = ctx._packetHandler.handlePacket(packetData, ctx);
            if (!rcp) {
              reject("Cannot find the required packet handler");
              return; // We cannot find the required packet handler. Most probably the game packet is not yet implemented.
            }

            this.logger.debug("Receive", rcp.constructor.name);
            if (rcp.read()) {
              GlobalEvents.fire(`PacketReceived:${rcp.constructor.name}`, { packet: rcp });
              resolve(rcp);
              rcp.run();
            }
          }, 0);
        })(i, this);

        i += packetLength;
      }
    });
  }

  sendRaw(raw: Uint8Array): Promise<void> {
    return this._connection.write(raw)
      .catch((error) => this.logger.error(error));
  }
}
