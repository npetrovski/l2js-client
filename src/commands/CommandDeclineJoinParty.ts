import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandDeclineJoinParty extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket("RequestAnswerJoinParty", { answer: 0 });
  }
}
