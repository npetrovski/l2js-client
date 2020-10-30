import GameClientPacket from "./GameClientPacket";

export default class InventoryUpdate extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _size = this.readH();
    for (let i = 0; i < _size; i++) {
      const _updateType = this.readH(); // Update type : 01-add, 02-modify, 03-remove
      const _item = this.readItem();

      this.Client.InventoryItems.delete(_item);
      this.Client.InventoryItems.add(_item);
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
