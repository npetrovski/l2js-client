import RequestAnswerJoinPledge from "@network/outgoing/game/x27_RequestAnswerJoinPledge";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandDeclineJoinClan extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket(new RequestAnswerJoinPledge(0));
  }
}
