import GameServerPacket from "./GameServerPacket";

export default class RequestAnswerJoinParty extends GameServerPacket {
  static readonly ANSWER_CANCEL = 0;
  static readonly ANSWER_ACCEPT = 1;

  private _answer: number = -1; // auto-refuse party

  constructor(answer: number) {
    super();
    this._answer = answer;
  }

  write(): void {
    this.writeC(0x43);
    this.writeD(this._answer);
  }
}
