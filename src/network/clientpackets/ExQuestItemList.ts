import GameClientPacket from "./GameClientPacket";
import L2Item from "../../entities/L2Item";

export default class ExQuestItemList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _size = this.readH();
    for (let i = 0; i < _size; i++) {
      const item = this.readItem();
      item.IsQuest = true;
      this.Client.InventoryItems.add(item);
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
