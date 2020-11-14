import GameServerPacket from "./GameServerPacket";

export default class ProtocolVersion extends GameServerPacket {
  private _protocolVersion = 656; // use value=-2 in order to "ping"

  write(): void {
    this.writeC(0x0e);
    this.writeD(this._protocolVersion);
  }
}
