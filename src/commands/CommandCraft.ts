import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandCraft extends AbstractGameCommand {
  execute(recipeId: number): void {
    this.GameClient.sendPacket("RequestRecipeItemMakeSelf", {
      recipe: recipeId,
    });
  }
}
