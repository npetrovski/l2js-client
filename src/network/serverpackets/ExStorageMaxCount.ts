import GameClientPacket from "./GameClientPacket";

export default class ExStorageMaxCount extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();


    const _inventory = this.readD();
    const _warehouse = this.readD();
    const _clan = this.readD();
    const _privateSell = this.readD();
    const _privateBuy = this.readD();
    const _receipeD = this.readD();
    const _recipe = this.readD();
    const _inventoryExtraSlots = this.readD();
    const _inventoryQuestItems = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
