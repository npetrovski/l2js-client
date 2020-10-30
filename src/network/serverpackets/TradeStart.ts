import GameClientPacket from "./GameClientPacket";

export default class TradeStart extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objId = this.readD();
    const _size = this.readH();
    for (let i = 0; i < _size; i++) {
      const _item = this.readItem();
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
