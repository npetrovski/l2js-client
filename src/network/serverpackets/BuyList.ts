import GameClientPacket from "./GameClientPacket";

export default class BuyList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _viewersAdena = this.readD();
    const _requestId = this.readD();

    const _itemsCount = this.readH();
    for (let i = 0; i < _itemsCount; i++) {
      const _itemType = this.readH();
      const _objId = this.readD();
    }

    // @todo finish the packet

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
