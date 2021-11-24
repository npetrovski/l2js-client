import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import DropItem from "../../incoming/game/DropItem";


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
