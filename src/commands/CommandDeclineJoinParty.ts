import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import RequestAnswerJoinParty from "../network/clientpackets/RequestAnswerJoinParty";

export default class CommandDeclineJoinParty extends AbstractGameCommand<GameClient> {
  execute(): void {
    this.Client?.sendPacket(new RequestAnswerJoinParty(RequestAnswerJoinParty.ANSWER_CANCEL));
  }
}
