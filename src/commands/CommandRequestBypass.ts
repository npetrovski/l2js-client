import AbstractGameCommand from "./AbstractGameCommand";
import RequestBypassToServer from "../network/outgoing/game/RequestBypassToServer";

export default class CommandRequestBypass extends AbstractGameCommand {
    execute(text: string): void {
        this.GameClient?.sendPacket(new RequestBypassToServer(text));
    }
}
