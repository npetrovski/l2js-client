import L2Item from "../../../entities/L2Item";
import GameClientPacket from "./GameClientPacket";

export default class InventoryUpdate extends GameClientPacket {
  Items: L2Item[] = [];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _size = this.readH();
    for (let i = 0; i < _size; i++) {
      const _updateType = this.readH(); // Update type : 01-add, 02-modify, 03-remove
      this.Items.push(this.readItem());
    }

    return true;
  }
}
