import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xB3_RequestUserCommand extends GameServerPacket {
  constructor(
    private readonly commandId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xB3);
    this.writeD(this.commandId);
  }
}

