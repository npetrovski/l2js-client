import { GlobalEvents } from "../../mmocore/EventEmitter";
import GameClientPacket from "./GameClientPacket";
import L2Recipe from "../../entities/L2Recipe";

export default class RecipeBookItemList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _isDwarvenCraft = this.readD() === 0; // 0 = Dwarven - 1 = Common

    if (_isDwarvenCraft) {
      this.Client.DwarfRecipeBook.clear();
    } else {
      this.Client.CommonRecipeBook.clear();
    }

    const _maxMp = this.readD();
    const _len = this.readD();
    for (let i = 0; i < _len; i++) {
      const recipe = new L2Recipe();
      recipe.Id = this.readD();
      recipe.ObjectId = this.readD();
      if (_isDwarvenCraft) {
        this.Client.DwarfRecipeBook.add(recipe);
      } else {
        this.Client.CommonRecipeBook.add(recipe);
      }
    }

    GlobalEvents.fire("RecipeBook", {
      isDwarven: _isDwarvenCraft,
    });

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
