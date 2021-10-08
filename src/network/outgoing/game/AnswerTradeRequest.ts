import GameServerPacket from "./GameServerPacket";

export default class AnswerTradeRequest extends GameServerPacket {
  constructor(private _answer: number) {
    super();
  }

  write(): void {
    this.writeC(0x55);
    this.writeD(this._answer);
  }
}
