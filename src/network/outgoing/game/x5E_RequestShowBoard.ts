import GameServerPacket from "./GameServerPacket";

export default class x5E_RequestShowBoard extends GameServerPacket {
  constructor(private _unknown: number = 0) {
    super();
  }

  write(): void {
    this.writeC(0x5e);
    this.writeD(this._unknown);
  }
}
