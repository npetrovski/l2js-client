import GameClientPacket from "./GameClientPacket";
import L2DroppedItem from "../../entities/L2DroppedItem";

export default class SpawnItem extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const item: L2DroppedItem = new L2DroppedItem();

    item.ObjectId = this.readD();
    item.Id = this.readD();

    const [_x, _y, _z] = this.readLoc();
    item.setLocation(_x, _y, _z);

    const _isStackable = this.readD() === 1;

    item.Count = this.readD();

    if (!this.Client.DroppedItems.containsObjectId(item.ObjectId)) {
      this.Client.DroppedItems.add(item);
      item.calculateDistance(this.Client.ActiveChar);
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
