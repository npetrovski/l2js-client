import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import Say2 from "../network/clientpackets/Say2";

export default class CommandTell extends AbstractGameCommand<GameClient> {
  execute(text: string, target: string): void {
    this.Client?.sendPacket(new Say2(Say2.TELL, text, target));
  }
}
