import { Actions } from "../enums/Actions";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandSitStand extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket("RequestActionUse", {
      action: Actions.SIT_STAND,
      ctrl_force_attack: 0,
      shift: 0,
    });
  }
}
