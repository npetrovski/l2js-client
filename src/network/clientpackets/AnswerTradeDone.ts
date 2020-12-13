import GameServerPacket from "./GameServerPacket";

export default class AnswerTradeDone extends GameServerPacket {
  constructor(private _answer: number) {
    super();
  }

  write(): void {
    this.writeC(0x1c);
    this.writeD(this._answer);
  }
}
