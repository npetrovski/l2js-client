import AbstractGameCommand from "./AbstractGameCommand";
import RequestAnswerJoinParty from "@network/outgoing/game/x43_RequestAnswerJoinParty";

export default class CommandDeclineJoinParty extends AbstractGameCommand {
  execute(): void {
    this.GameClient?.sendPacket(
      new RequestAnswerJoinParty(RequestAnswerJoinParty.ANSWER_CANCEL)
    );
  }
}
