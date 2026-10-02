import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xB6_RequestRecipeBookDestroy extends GameServerPacket {
  constructor(
    private readonly recipeId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xB6);
    this.writeD(this.recipeId);
  }
}

