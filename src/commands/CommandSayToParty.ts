import AbstractGameCommand from "./AbstractGameCommand";
import Say2 from "../network/outgoing/game/Say2";

export default class CommandSayToParty extends AbstractGameCommand {
  execute(text: string): void {
    this.GameClient?.sendPacket(new Say2(Say2.PARTY, text));
  }
}
