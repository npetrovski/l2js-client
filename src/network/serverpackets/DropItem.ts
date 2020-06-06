import GameClientPacket from "./GameClientPacket";
import L2DroppedItem from "../../entities/L2DroppedItem";

export default class DropItem extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const item: L2DroppedItem = new L2DroppedItem();

    const _charObjectId = this.readD();
    item.ObjectId = this.readD();
    item.Id = this.readD();

    const [_x, _y, _z] = this.readLoc();
    item.setLocation(_x, _y, _z);

    const _isStackable = this.readD() === 1;

    item.Count = this.readQ();
    const _unkn1 = this.readD();

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
