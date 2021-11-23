import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";
import L2Recipe from "../../../entities/L2Recipe";

export default class RecipeBookItemListMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const isDwarvenCraft = (packet.get("book") as number) === 0; // 0 = Dwarven - 1 = Common

    if (isDwarvenCraft) {
      this.Client.DwarfRecipeBook.clear();
    } else {
      this.Client.CommonRecipeBook.clear();
    }

    (packet.get("recipes") as Record<string, number>[]).forEach((data) => {
      const recipe = new L2Recipe();
      recipe.Id = data.recipe;
      recipe.ObjectId = data.position;
      if (isDwarvenCraft) {
        this.Client.DwarfRecipeBook.add(recipe);
      } else {
        this.Client.CommonRecipeBook.add(recipe);
      }
    });

    GlobalEvents.fire("RecipeBook", {
      isDwarven: isDwarvenCraft,
    });
  }
}
