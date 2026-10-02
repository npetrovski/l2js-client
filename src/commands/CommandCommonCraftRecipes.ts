import RequestRecipeBookOpen from "@network/outgoing/game/xB5_RequestRecipeBookOpen";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandCommonCraftRecipes extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket(new RequestRecipeBookOpen(false));
  }
}
