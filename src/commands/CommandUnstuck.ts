import RequestUserCommand from "@network/outgoing/game/xB3_RequestUserCommand";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandUnstuck extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket(new RequestUserCommand(52));
  }
}
