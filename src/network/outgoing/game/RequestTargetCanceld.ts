import GameServerPacket from "./GameServerPacket";

export default class RequestTargetCanceld extends GameServerPacket {
  constructor(private _unselect: number) {
    super();
  }

  write(): void {
    this.writeC(0x48);
    this.writeH(this._unselect);
  }
}
