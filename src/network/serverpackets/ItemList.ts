import GameClientPacket from "./GameClientPacket";

export default class ItemList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _showWindow = this.readH();
    const _size = this.readH();
    for (let i = 0; i < _size; i++) {
      const item = this.readItem();
      item.IsQuest = false;
      this.Client.InventoryItems.add(item);
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
