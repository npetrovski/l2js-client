import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import NpcQuestHtmlMessage from "../../incoming/game/NpcQuestHtmlMessage";
import GameClient from "../../GameClient";

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
