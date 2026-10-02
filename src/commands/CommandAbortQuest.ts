import RequestQuestAbort from "@network/outgoing/game/x63_RequestQuestAbort";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandAbortQuest extends AbstractGameCommand {
  execute(questId: number): void {
    this.GameClient.sendPacket(new RequestQuestAbort(questId));
  }
}
