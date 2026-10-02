import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import QuestList from "@network/incoming/game/x86_QuestList";

export default class QuestListMutator extends IMMOClientMutator<GameClient, QuestList> {
  update(packet: QuestList): void {
    this.Client.QuestsList.clear();
    packet.Quests.forEach((quest) => this.Client.QuestsList.add(quest));
    this.fire("QuestList", { quests: packet.Quests });
  }
}
