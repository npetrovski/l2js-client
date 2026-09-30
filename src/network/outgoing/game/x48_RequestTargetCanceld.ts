import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x48_RequestTargetCanceld extends GameServerPacket {
  constructor(private _unselect: number) {
    super();
  }

  write(): void {
    this.writeC(0x48);
    this.writeH(this._unselect);
  }
}
