import AbstractGameCommand from "./AbstractGameCommand";
import L2Character from "../entities/L2Character";
import RequestJoinParty from "../network/outgoing/game/RequestJoinParty";

export default class CommandJoinParty extends AbstractGameCommand {
    execute(char?: L2Character | string): void {
        if (char && char instanceof L2Character) {
            char = char.Name;
        }

        if (!char) {
            char = this.GameClient.ActiveChar.Target?.Name;
        }

        if (!char) {
            return;
        }

        this.GameClient?.sendPacket(new RequestJoinParty(char));
    }
}
