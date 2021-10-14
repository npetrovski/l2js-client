import { Actions } from "../enums/Actions";
import RequestActionUse from "../network/outgoing/game/RequestActionUse";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandSitStand extends AbstractGameCommand {
  execute(): void {
    this.GameClient?.sendPacket(
      new RequestActionUse(Actions.SIT_STAND, false, false)
    );
  }
}
