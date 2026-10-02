import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x88_RequestTutorialClientEvent extends GameServerPacket {
  constructor(
    private readonly eventId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0x88);
    this.writeD(this.eventId);
  }
}

