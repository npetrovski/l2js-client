import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import NpcHtmlMessage from "../../incoming/game/NpcHtmlMessage";
import GameClient from "../../GameClient";

export default class NpcHtmlMessageMutator extends IMMOClientMutator<
    GameClient,
    NpcHtmlMessage
> {
    update(packet: NpcHtmlMessage): void {
        this.fire("NpcHtmlMessage", {
            npcObjectId: packet.NpcObjectId,
            html: packet.Html,
            itemId: packet.ItemId
        });
    }
}
