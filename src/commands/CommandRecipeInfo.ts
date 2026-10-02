import L2Recipe from "@entities/L2Recipe";
import RequestRecipeItemMakeInfo from "@network/outgoing/game/xB7_RequestRecipeItemMakeInfo";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandRecipeInfo extends AbstractGameCommand {
  execute(recipe: L2Recipe | number): void {
    const recipeId = recipe instanceof L2Recipe ? recipe.Id : recipe;
    this.GameClient.sendPacket(new RequestRecipeItemMakeInfo(recipeId));
  }
}
