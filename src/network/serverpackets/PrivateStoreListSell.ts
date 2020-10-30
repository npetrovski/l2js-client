import GameClientPacket from "./GameClientPacket";

export default class PrivateStoreListSell extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objId = this.readD();
    const _packageSale = this.readD();
    const _playerAdena = this.readQ();

    const _len = this.readD();
    for (let i = 0; i < _len; i++) {
      const _item = this.readItem();
      const _price = this.readQ();
      const _referencePrice = this.readQ();
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
