import GameClient from "../network/GameClient";
import RequestRecipeItemMakeSelf from "../network/clientpackets/RequestRecipeItemMakeSelf";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandCraft extends AbstractGameCommand<GameClient> {
  execute(recipeId: number): void {
    this.Client?.sendPacket(new RequestRecipeItemMakeSelf(recipeId));
  }
}
