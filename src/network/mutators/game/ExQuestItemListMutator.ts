import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import ExQuestItemList from "@network/incoming/game/xFE_xC6_ExQuestItemList";

export default class ExQuestItemListMutator extends IMMOClientMutator<
  GameClient,
  ExQuestItemList
> {
  update(packet: ExQuestItemList): void {
    packet.Items.forEach((i) => this.Client.InventoryItems.add(i));
  }
}
