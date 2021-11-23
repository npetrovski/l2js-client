import AbstractGameCommand from "./AbstractGameCommand";
import L2Character from "../entities/L2Character";

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

    this.GameClient.sendPacket("RequestDuelStart", {
      player: char,
      is_party_duel: partyDuel ? 1 : 0,
    });
  }
}
