import AnswerTradeRequest from "@network/outgoing/game/x55_AnswerTradeRequest";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandDeclineTrade extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket(new AnswerTradeRequest(0));
  }
}
