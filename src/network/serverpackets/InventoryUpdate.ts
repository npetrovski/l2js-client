import GameClientPacket from "./GameClientPacket";

export default class InventoryUpdate extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _size = this.readH();
    for (let i = 0; i < _size; i++) {
      const _updateType = this.readH(); // Update type : 01-add, 02-modify, 03-remove
      const _item = this.readItem();

      const currentItem = this.Client.InventoryItems.getEntryById(_item.Id);
      if (currentItem) {
        this.Client.InventoryItems.delete(currentItem);
      }

      this.Client.InventoryItems.add(_item);
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
