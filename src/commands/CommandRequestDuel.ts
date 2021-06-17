import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import L2Character from "../entities/L2Character";
import RequestDuelStart from "../network/clientpackets/RequestDuelStart";

export default class CommandRequestDuel extends AbstractGameCommand<GameClient> {
  execute(char?: L2Character | string, partyDuel = false): void {
    if (char && char instanceof L2Character) {
      char = char.Name;
    }

    if (!char) {
      char = this.Client.ActiveChar.Target?.Name;
    }

    if (!char) {
      return;
    }

    this.Client?.sendPacket(new RequestDuelStart(char, partyDuel));
  }
}
