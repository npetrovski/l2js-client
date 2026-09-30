import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import RecipeItemMakeInfo from "@network/incoming/game/xDD_RecipeItemMakeInfo";
import GameClient from "@network/GameClient";

export default class RecipeItemMakeInfoMutator extends IMMOClientMutator<
  GameClient,
  RecipeItemMakeInfo
> {
  update(packet: RecipeItemMakeInfo): void {
    this.fire("CraftResult", {
      recipeId: packet.RecipeId,
      success: packet.Success,
    });
  }
}
