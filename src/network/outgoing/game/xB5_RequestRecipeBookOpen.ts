import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xB5_RequestRecipeBookOpen extends GameServerPacket {
  constructor(
    private readonly isDwarvenCraft: boolean
  ) {
    super();
  }

  write(): void {
    this.writeC(0xB5);
    this.writeD(this.isDwarvenCraft ? 0 : 1);
  }
}

