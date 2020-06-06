import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import RequestTargetCancel from "../network/clientpackets/RequestTargetCancel";

export default class CommandCancelTarget extends AbstractGameCommand<GameClient> {
  execute(): void {
    this.Client?.sendPacket(new RequestTargetCancel());
  }
}
