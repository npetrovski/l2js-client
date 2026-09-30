import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import ItemList from "@network/incoming/game/x11_ItemList";

export default class ItemListMutator extends IMMOClientMutator<
  GameClient,
  ItemList
> {
  update(packet: ItemList): void {
    packet.Items.forEach((item) => this.Client.InventoryItems.add(item));
  }
}
