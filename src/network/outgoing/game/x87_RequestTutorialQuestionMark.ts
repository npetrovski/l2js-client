import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x87_RequestTutorialQuestionMark extends GameServerPacket {
  constructor(
    private readonly num: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0x87);
    this.writeD(this.num);
  }
}

