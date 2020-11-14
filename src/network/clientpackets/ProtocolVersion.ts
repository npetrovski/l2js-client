import GameServerPacket from "./GameServerPacket";

export default class ProtocolVersion extends GameServerPacket {
  private _protocolVersion = 656; // use value=-2 in order to "ping"

  write(): void {
    this.writeC(0x00);
    this.writeD(this._protocolVersion);
  }
}
