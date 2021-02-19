import GameClientPacket from "./GameClientPacket";

export default class QuestList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _questCount = this.readH();
    for (let i = 0; i < _questCount; i++) {

      const _questId = this.readD();
      const _state = this.readD();
    }

    const _questItemCount = this.readH();
    for (let i = 0; i < _questItemCount; i++) {

      const _itemObjId = this.readD();
      const _itemId = this.readD();
      const _itemCount = this.readD();
      const _itemInventorySlot = this.readD();
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
