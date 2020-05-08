import GameServerPacket from "./GameServerPacket";

export default class RequestRecipeItemMakeInfo extends GameServerPacket {
  private _recipeId: number;
  constructor(recipeId: number) {
    super();
    this._recipeId = recipeId;
  }

  write(): void {
    this.writeC(0xb7);
    this.writeD(this._recipeId);
  }
}
