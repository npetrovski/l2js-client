import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x43_RequestAnswerJoinParty extends GameServerPacket {
  static readonly ANSWER_CANCEL = 0;
  static readonly ANSWER_ACCEPT = 1;

  constructor(public answer: number = -1) {
    super();
  }

  write(): void {
    this.writeC(0x43);
    this.writeD(this.answer);
  }
}
