import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x7E_RequestVoteNew extends GameServerPacket {
  constructor(private _targetId: number) {
    super();
  }

  write(): void {
    this.writeC(0xd0);
    this.writeH(0x7e);
    this.writeD(this._targetId);
  }
}
