import GameClientPacket from "./GameClientPacket";

export default class TradeOtherAdd extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _itemsAddedCount = this.readH();
    for (let i = 0; i < _itemsAddedCount; i++) {
      const item = this.readItem();
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
