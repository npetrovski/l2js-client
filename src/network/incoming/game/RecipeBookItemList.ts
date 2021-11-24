import GameClientPacket from "./GameClientPacket";
import L2Recipe from "../../../entities/L2Recipe";

export default class RecipeBookItemList extends GameClientPacket {
  IsDwarvenCraft!: boolean;

  Recipes: L2Recipe[] = [];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.IsDwarvenCraft = this.readD() === 0; // 0 = Dwarven - 1 = Common

    const _maxMp = this.readD();
    const _len = this.readD();
    for (let i = 0; i < _len; i++) {
      const recipe = new L2Recipe();
      recipe.Id = this.readD();
      recipe.ObjectId = this.readD();
      this.Recipes.push(recipe);
    }

    return true;
  }
}
