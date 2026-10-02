import RequestQuestList from "@network/outgoing/game/x62_RequestQuestList";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandQuests extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket(new RequestQuestList());
  }
}
