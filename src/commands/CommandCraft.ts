import RequestRecipeItemMakeSelf from "@network/outgoing/game/xB8_RequestRecipeItemMakeSelf";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandCraft extends AbstractGameCommand {
  execute(recipeId: number): void {
    this.GameClient?.sendPacket(new RequestRecipeItemMakeSelf(recipeId));
  }
}
