import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x63_RequestQuestAbort extends GameServerPacket {
  constructor(
    private readonly questId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0x63);
    this.writeD(this.questId);
  }
}

