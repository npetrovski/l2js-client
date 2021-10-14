import AbstractGameCommand from "./AbstractGameCommand";
import Say2 from "../network/outgoing/game/Say2";

export default class CommandSayToAlly extends AbstractGameCommand {
  execute(text: string): void {
    this.GameClient?.sendPacket(new Say2(Say2.ALLIANCE, text));
  }
}
