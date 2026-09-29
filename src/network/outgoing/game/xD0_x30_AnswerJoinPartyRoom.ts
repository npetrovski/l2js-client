import GameServerPacket from "./GameServerPacket";

export default class xD0_x30_AnswerJoinPartyRoom extends GameServerPacket {
  constructor(private _answer: number) {
    super();
  }

  write(): void {
    this.writeC(0xd0);
    this.writeH(0x30);
    this.writeD(this._answer);
  }
}
