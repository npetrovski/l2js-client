import AbstractGameCommand from "./AbstractGameCommand";
import L2Character from "../entities/L2Character";
import RequestDuelStart from "../network/outgoing/game/RequestDuelStart";

export default class CommandRequestDuel extends AbstractGameCommand {
  execute(char?: L2Character | string, partyDuel = false): void {
    if (char && char instanceof L2Character) {
      char = char.Name;
    }

    if (!char) {
      char = this.GameClient.ActiveChar.Target?.Name;
    }

    if (!char) {
      return;
    }

    this.GameClient?.sendPacket(new RequestDuelStart(char, partyDuel));
  }
}
