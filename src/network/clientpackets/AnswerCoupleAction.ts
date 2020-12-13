import GameServerPacket from "./GameServerPacket";

export default class AnswerCoupleAction extends GameServerPacket {
  constructor(private _actionId: number, private _answer: number, private _charObjId: number) {
    super();
  }

  write(): void {
    this.writeC(0xd0);
    this.writeH(0x7a);
    this.writeD(this._actionId);
    this.writeD(this._answer);
    this.writeD(this._charObjId);
  }
}
