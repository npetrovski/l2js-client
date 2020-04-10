import MMOConnection from "./MMOConnection";
import ReceivablePacket from "./ReceivablePacket";
import IPacketHandler from "./IPacketHandler";
import { GlobalEvents } from "./EventEmitter";

export default abstract class MMOClient<T extends MMOConnection<any>> {
  private _connection!: T;

  private _packetHandler!: IPacketHandler<MMOClient<any>>;

  constructor(con: T) {
    this._connection = con;
  }
  abstract encrypt(var1: Uint8Array, var2: number, var3: number): void;

  abstract decrypt(var1: Uint8Array, var2: number, var3: number): void;

  get Connection(): T {
    return this._connection;
  }

  get PacketHandler(): IPacketHandler<MMOClient<any>> {
    return this._packetHandler;
  }

  set PacketHandler(handler: IPacketHandler<MMOClient<any>>) {
    this._packetHandler = handler;
  }

  private _buffer: Uint8Array = new Uint8Array();

  process(raw: Uint8Array): void {
    var data: Uint8Array = new Uint8Array(raw);
    if (this._buffer.byteLength > 0) {
      data = new Uint8Array(raw.byteLength + this._buffer.byteLength);
      data.set(this._buffer, 0);
      data.set(raw, this._buffer.byteLength);
      this._buffer = new Uint8Array();
    }

    var i = 0;
    while (i < data.byteLength) {
      var pLen = data[i] + (data[i + 1] << 8);

      if (pLen <= 2) {
        break;
      }

      if (i + pLen > data.byteLength) {
        this._buffer = data.slice(i);
        break;
      }

      (function (i, that) {
        var r = Math.random().toString(36).substring(7).toUpperCase();
        var packetData = new Uint8Array(data.slice(i + 2, i + pLen)); // +2 is for skipping the packet size
        that.decrypt(packetData, 0, packetData.byteLength);

        setTimeout(() => {
          var rcp: ReceivablePacket<MMOClient<any>> = that._packetHandler.handlePacket(packetData, that);
          if (!rcp) {
            return; //We cannot parse the data. Most probably the game packet is not yet implemented.
          }

          if (rcp.read()) {
            GlobalEvents.fire(`packet:${rcp.constructor.name}`, rcp);
            rcp.run();
          }
        }, 0);
      })(i, this);

      i += pLen;
    }
  }

  hexString(data: Uint8Array): string {
    return (
      " ".repeat(7) +
      Array.from(new Array(16), (n, v) => ("0" + (v & 0xff).toString(16)).slice(-2).toUpperCase()).join(" ") +
      "\r\n" +
      "=".repeat(54) +
      "\r\n" +
      Array.from(Array.from(data), (byte, k) => {
        return (
          (k % 16 == 0
            ? ("00000" + ((Math.ceil(k / 16) * 16) & 0xffff).toString(16)).slice(-5).toUpperCase() + "  "
            : "") +
          ("0" + (byte & 0xff).toString(16)).slice(-2) +
          ((k + 1) % 16 == 0 ? "\r\n" : " ")
        );
      })
        .join("")
        .toUpperCase() +
      "\r\n"
    );
  }
}
