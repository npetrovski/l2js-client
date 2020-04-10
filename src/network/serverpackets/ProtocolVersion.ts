import GameServerPacket from "./GameServerPacket";

export default class ProtocolVersion extends GameServerPacket {
  private _protocolVersion = 268; // use value=-2 in order to "ping"

  constructor() {
    super(5);
  }

  write(): void {
    this.writeC(0x0e);
    this.writeD(this._protocolVersion);
  }
}
