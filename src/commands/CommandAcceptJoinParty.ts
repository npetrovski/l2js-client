import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandAcceptJoinParty extends AbstractGameCommand {
  static readonly ANSWER_CANCEL = 0;
  static readonly ANSWER_ACCEPT = 1;
  execute(): void {
    this.GameClient.sendPacket("RequestAnswerJoinParty", {
      answer: CommandAcceptJoinParty.ANSWER_ACCEPT,
    });
  }
}
