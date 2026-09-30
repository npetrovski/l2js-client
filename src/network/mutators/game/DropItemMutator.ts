import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import DropItem from "@network/incoming/game/x16_DropItem";

export default class DropItemMutator extends IMMOClientMutator<
  GameClient,
  DropItem
> {
  update(packet: DropItem): void {
    if (!this.Client.DroppedItems.containsObjectId(packet.Item.ObjectId)) {
      this.Client.DroppedItems.add(packet.Item);
      packet.Item.calculateDistance(this.Client.ActiveChar);
    }
  }
}
