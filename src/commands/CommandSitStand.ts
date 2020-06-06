import { Actions } from "../enums/Actions";
import GameClient from "../network/GameClient";
import RequestActionUse from "../network/clientpackets/RequestActionUse";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandSitStand extends AbstractGameCommand<GameClient> {
  execute(): void {
    this.Client?.sendPacket(new RequestActionUse(Actions.SIT_STAND, false, false));
  }
}
