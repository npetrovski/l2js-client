import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";
import L2DroppedItem from "../../../entities/L2DroppedItem";

export default class SpawnItemMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const item = new L2DroppedItem();
    item.ObjectId = packet.get("item_oid") as number;
    item.Id = packet.get("item") as number;
    item.Count = packet.get("amount") as number;
    item.setLocation(
      packet.get("location_x") as number,
      packet.get("location_y") as number,
      packet.get("location_z") as number
    );

    if (!this.Client.DroppedItems.containsObjectId(item.ObjectId)) {
      item.calculateDistance(this.Client.ActiveChar);
      this.Client.DroppedItems.add(item);
    }
  }
}
