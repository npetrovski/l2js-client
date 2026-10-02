import L2Recipe from "@entities/L2Recipe";
import RequestRecipeBookDestroy from "@network/outgoing/game/xB6_RequestRecipeBookDestroy";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandDeleteRecipe extends AbstractGameCommand {
  execute(recipe: L2Recipe | number): void {
    const recipeId = recipe instanceof L2Recipe ? recipe.Id : recipe;
    this.GameClient.sendPacket(new RequestRecipeBookDestroy(recipeId));
  }
}
