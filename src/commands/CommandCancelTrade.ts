import AnswerTradeDone from "@network/outgoing/game/x1C_AnswerTradeDone";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandCancelTrade extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket(new AnswerTradeDone(0));
  }
}
