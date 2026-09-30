import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import SpawnItem from "@network/incoming/game/x05_SpawnItem";

export default class SpawnItemMutator extends IMMOClientMutator<GameClient, SpawnItem> {
  update(packet: SpawnItem): void {
    if (packet.Item) {
      if (!this.Client.DroppedItems.containsObjectId(packet.Item.ObjectId)) {
        this.Client.DroppedItems.add(packet.Item);
      }
      packet.Item.calculateDistance(this.Client.ActiveChar);
    }
  }
}
