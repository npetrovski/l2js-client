import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import NpcQuestHtmlMessage from "@network/incoming/game/xFE_x8D_NpcQuestHtmlMessage";
import GameClient from "@network/GameClient";

export default class NpcQuestHtmlMessageMutator extends IMMOClientMutator<
  GameClient,
  NpcQuestHtmlMessage
> {
  update(packet: NpcQuestHtmlMessage): void {
    this.fire("NpcQuestHtmlMessage", {
      npcObjectId: packet.NpcObjectId,
      html: packet.Html,
      questId: packet.QuestId,
    });
  }
}
