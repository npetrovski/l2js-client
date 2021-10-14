import AbstractGameCommand from "./AbstractGameCommand";
import Say2 from "../network/outgoing/game/Say2";

export default class CommandTell extends AbstractGameCommand {
  execute(text: string, target: string): void {
    this.GameClient?.sendPacket(new Say2(Say2.TELL, text, target));
  }
}
