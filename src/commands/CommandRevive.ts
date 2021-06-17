import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import { RestartPoint } from "../enums/RestartPoint";
import RequestRestartPoint from "../network/clientpackets/RequestRestartPoint";

export default class CommandRevive extends AbstractGameCommand<GameClient> {
  execute(where: RestartPoint = RestartPoint.TOWN): void {
    this.Client?.sendPacket(new RequestRestartPoint(where as number));
  }
}
