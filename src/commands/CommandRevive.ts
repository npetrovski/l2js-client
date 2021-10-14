import AbstractGameCommand from "./AbstractGameCommand";
import { RestartPoint } from "../enums/RestartPoint";
import RequestRestartPoint from "../network/outgoing/game/RequestRestartPoint";

export default class CommandRevive extends AbstractGameCommand {
  execute(where: RestartPoint = RestartPoint.TOWN): void {
    this.GameClient?.sendPacket(new RequestRestartPoint(where as number));
  }
}
