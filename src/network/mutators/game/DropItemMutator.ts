import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";
import L2DroppedItem from "../../../entities/L2DroppedItem";

export default class DropItemMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const item = new L2DroppedItem();
    item.ObjectId = packet.get("item_oid") as number;
    item.Id = packet.get("item") as number;
    item.setLocation(
      packet.get("destination_x") as number,
      packet.get("destination_y") as number,
      packet.get("destination_z") as number
    );
    item.Count = packet.get("amount") as number;

    if (!this.Client.DroppedItems.containsObjectId(item.ObjectId)) {
      this.Client.DroppedItems.add(item);
      item.calculateDistance(this.Client.ActiveChar);
    }
  }
}
