import { Actions } from "@enums/Actions";
import RequestActionUse from "@network/outgoing/game/x56_RequestActionUse";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandRunWalk extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket(new RequestActionUse(Actions.WALK_RUN, false, false));
  }
}
