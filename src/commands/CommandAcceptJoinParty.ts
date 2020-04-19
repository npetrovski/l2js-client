import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import RequestTargetCancel from "../network/serverpackets/RequestTargetCancel";
import RequestAnswerJoinParty from "../network/serverpackets/RequestAnswerJoinParty";

export default class CommandAcceptJoinParty extends AbstractGameCommand<GameClient> {
  execute(): void {
    this.Client?.sendPacket(new RequestAnswerJoinParty(RequestAnswerJoinParty.ANSWER_ACCEPT));
  }
}
