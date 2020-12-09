import GameServerPacket from "./GameServerPacket";

export default class RequestRecipeItemMakeInfo extends GameServerPacket {
  constructor(public recipeId: number) {
    super();
  }

  write(): void {
    this.writeC(0xb7);
    this.writeD(this.recipeId);
  }
}
