import IPacketHandler from "../mmocore/IPacketHandler";
import Logger from "../mmocore/Logger";
import SerializablePacket from "../mmocore/SerializablePacket";

type InterceptDataCallback = (prefix: string, data: Uint8Array) => Uint8Array;

export default class PacketHandler implements IPacketHandler {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  constructor(
    protected map: { [prefix: string]: { name: string; schema: { [c: string]: unknown } } },
    protected interceptData?: InterceptDataCallback
  ) {}

  handlePacket(data: Uint8Array): SerializablePacket | undefined {
    let n = 0;
    let prefix = "";
    while (n <= 7) {
      if (data.byteLength < n) {
        this.logger.debug("Unknown packet received.");
        return;
      }
      prefix += data[n].toString(16).padStart(2, "0");
      if (prefix in this.map) {
        if (this.interceptData) {
          data = this.interceptData(prefix, data);
        }

        return new SerializablePacket(this.map[prefix].name, this.map[prefix].schema, data);
      }
      n++;
    }
  }
}
