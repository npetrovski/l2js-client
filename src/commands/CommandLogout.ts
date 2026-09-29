import Logout from "../network/outgoing/game/x00_Logout";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandLogout extends AbstractGameCommand {
  execute(): void {
    this.GameClient?.sendPacket(new Logout());
  }
}
