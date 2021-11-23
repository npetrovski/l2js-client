import IPacketHandler from "./IPacketHandler";
import { GlobalEvents } from "./EventEmitter";
import IConnection from "./IConnection";
import Logger from "./Logger";
import IProcessable from "./IProcessable";
import IEncryptable from "./IEncryptble";
import IMMOClientMutator from "./IMMOClientMutator";
import SerializablePacket from "./SerializablePacket";
import MMOConfig from "./MMOConfig";

export default abstract class MMOClient implements IProcessable, IEncryptable {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  protected _buffer = new Uint8Array();

  private _connection!: IConnection;

  abstract init(config: MMOConfig, connection?: IConnection): this;

  abstract encrypt(data: Uint8Array, offset?: number, size?: number): void;

  abstract decrypt(data: Uint8Array, offset?: number, size?: number): boolean;

  abstract setKey(key: Uint8Array): void;

  abstract sendPacket(name: string, data: Record<string, unknown>): void;

  abstract pack(packet: SerializablePacket): Uint8Array;

  abstract reset(): void;

  abstract ServerPacketsHandler: IPacketHandler;
  abstract ClientPacketsHandler: IPacketHandler;

  get Connection(): IConnection {
    return this._connection;
  }

  set Connection(conn: IConnection) {
    this._connection = conn;
  }

  _mts: {
    [index: string]: IMMOClientMutator<MMOClient, SerializablePacket>[];
  } = {};

  registerMutator(mutator: IMMOClientMutator<MMOClient, SerializablePacket>): void {
    if (!(mutator.PacketType in this._mts)) {
      this._mts[mutator.PacketType] = [];
    }
    this._mts[mutator.PacketType].push(mutator);
  }

  /**
   * The idea is to change the Client state without this being part of the Packet,
   * instead we register and use "Mutators". Decoupling this logic from the packets
   * provides us with better control on the Client state. Each client (Login or Game)
   * is responsible for registering the Mutators upon init() phase.
   */
  mutate(packet: SerializablePacket): void {
    if (packet.Name in this._mts) {
      this._mts[packet.Name].forEach((m) => {
        this.logger.debug("Mutating", m.constructor.name);
        try {
          m.update(packet);
        } catch (e) {
          this.logger.error(e);
        }
      });
    }
  }

  connect(): Promise<void> {
    return this._connection.connect();
  }

  process(raw: Uint8Array): Promise<SerializablePacket> {
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
        // if (packetLength <= 2) {
        //   break;
        // }

        if (i + packetLength > data.byteLength) {
          this._buffer = data.slice(i);
          reject("Incomplete packet");
          break;
        }

        const packetData = data.slice(i + 2, i + packetLength); // +2 is for skipping the packet size

        if (!this.decrypt(packetData, 0, packetData.byteLength)) {
          this.logger.warn("Packet checksum is not valid");
        }

        const rcp = this.ServerPacketsHandler.handlePacket(packetData);
        if (!rcp) {
          reject(`Cannot find a handler for this packet. Opcode: 0x${packetData[0].toString(16)}`);
          return; // We cannot find the required packet handler. Most probably the packet is not yet implemented.
        }

        if (rcp.read()) {
          this.logger.debug("Received", `0x${packetData[0].toString(16)}`, `${rcp.Name}`);
          this.mutate(rcp);
          GlobalEvents.fire(`PacketReceived:${rcp.Name}`, { packet: rcp });
          resolve(rcp);
        }

        i += packetLength;
      }
    });
  }

  sendRaw(raw: Uint8Array): Promise<void> {
    return this._connection.write(raw).catch((error) => this.logger.error(error));
  }

  public static hexString(data: Uint8Array): string {
    return (
      " ".repeat(7) +
      Array.from(new Array(16), (n, v) => ("0" + (v & 0xff).toString(16)).slice(-2).toUpperCase()).join(" ") +
      "\r\n" +
      "=".repeat(54) +
      "\r\n" +
      Array.from(Array.from(data), (byte, k) => {
        return (
          (k % 16 === 0
            ? ("00000" + ((Math.ceil(k / 16) * 16) & 0xffff).toString(16)).slice(-5).toUpperCase() + "  "
            : "") +
          ("0" + (byte & 0xff).toString(16)).slice(-2) +
          ((k + 1) % 16 === 0 ? "\r\n" : " ")
        );
      })
        .join("")
        .toUpperCase() +
      "\r\n"
    );
  }
}
