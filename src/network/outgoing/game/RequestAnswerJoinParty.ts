import GameServerPacket from "./GameServerPacket";

export default class RequestAnswerJoinParty extends GameServerPacket {
  static readonly ANSWER_CANCEL = 0;
  static readonly ANSWER_ACCEPT = 1;

  constructor(public answer: number = -1) {
    super();
  }

  write(): void {
    this.writeC(0x2a);
    this.writeD(this.answer);
  }
}
