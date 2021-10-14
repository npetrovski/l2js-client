import AbstractGameCommand from "./AbstractGameCommand";
import RequestTargetCancel from "../network/outgoing/game/RequestTargetCancel";

export default class CommandCancelTarget extends AbstractGameCommand {
  execute(): void {
    this.GameClient?.sendPacket(new RequestTargetCancel());
  }
}
