import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import NpcHtmlMessage from "../../incoming/game/NpcQuestHtmlMessage";
import GameClient from "../../GameClient";

export default class NpcQuestHtmlMessageMutator extends IMMOClientMutator<
    GameClient,
    NpcQuestHtmlMessage
> {
    update(packet: NpcQuestHtmlMessage): void {
        this.fire("NpcQuestHtmlMessage", {
            npcObjectId: this.NpcObjId,
            html: this.Html,
            questId: this.QuestId
        });
    }
}
