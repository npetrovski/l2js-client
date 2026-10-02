import AnswerTradeRequest from "@network/outgoing/game/x55_AnswerTradeRequest";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandAcceptTrade extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket(new AnswerTradeRequest(1));
  }
}
