import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import SpawnItem from "../../incoming/game/SpawnItem";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class SpawnItemMutator extends IMMOClientMutator<
  GameClient,
  SpawnItem
> {
  update(packet: SpawnItem): void {
    if (!this.Client.DroppedItems.containsObjectId(packet.Item.ObjectId)) {
      this.Client.DroppedItems.add(packet.Item);
      packet.Item.calculateDistance(this.Client.ActiveChar);
    }
  }
}
