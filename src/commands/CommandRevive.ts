import AbstractGameCommand from "./AbstractGameCommand";
import { RestartPoint } from "../enums/RestartPoint";

export default class CommandRevive extends AbstractGameCommand {
  execute(where: RestartPoint = RestartPoint.TOWN): void {
    this.GameClient.sendPacket("RequestRestartPoint", {
      location: where as number,
    });
  }
}
