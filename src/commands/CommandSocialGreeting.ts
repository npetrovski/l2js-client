import { Actions } from "@enums/Actions";
import RequestActionUse from "@network/outgoing/game/x56_RequestActionUse";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandSocialGreeting extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket(new RequestActionUse(Actions.SOCIAL_GREETING, false, false));
  }
}
