import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x27_RequestAnswerJoinPledge extends GameServerPacket {
  constructor(
    private readonly answer: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0x27);
    this.writeD(this.answer);
  }
}

