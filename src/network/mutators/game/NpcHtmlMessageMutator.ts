import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import NpcHtmlMessage from "@network/incoming/game/x19_NpcHtmlMessage";
import GameClient from "@network/GameClient";

export default class NpcHtmlMessageMutator extends IMMOClientMutator<
  GameClient,
  NpcHtmlMessage
> {
  update(packet: NpcHtmlMessage): void {
    this.fire("NpcHtmlMessage", {
      npcObjectId: packet.NpcObjectId,
      html: packet.Html,
      itemId: packet.ItemId,
    });
  }
}
