import GameServerPacket from "./GameServerPacket";

export default class xB8_RequestRecipeItemMakeSelf extends GameServerPacket {
  private _recipeId: number;
  constructor(recipeId: number) {
    super();
    this._recipeId = recipeId;
  }

  write(): void {
    this.writeC(0xb8);
    this.writeD(this._recipeId);
  }
}
