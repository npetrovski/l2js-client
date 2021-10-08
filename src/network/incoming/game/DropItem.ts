import GameClientPacket from "./GameClientPacket";
import L2DroppedItem from "../../../entities/L2DroppedItem";

export default class DropItem extends GameClientPacket {
  Item: L2DroppedItem = new L2DroppedItem();

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _charObjectId = this.readD();
    this.Item.ObjectId = this.readD();
    this.Item.Id = this.readD();

    const [_x, _y, _z] = this.readLoc();
    this.Item.setLocation(_x, _y, _z);

    const _isStackable = this.readD() === 1;

    this.Item.Count = this.readQ();
    const _unkn1 = this.readD();

    return true;
  }
}
