import GameClientPacket from "./GameClientPacket";

export default class HennaEquipList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _adena = this.readQ(); // activeChar current amount of Adena
    const _slots = this.readD(); // available equip slot, almost always 3

    const _hennaEquipListSize = this.readD();

    for (let i = 0; i < _hennaEquipListSize; i++) {
      // Player must have at least one dye in inventory
      // to be able to see the Henna that can be applied with it.

      const _dyeId = this.readD(); // dye Id
      const _dyeItemId = this.readD(); // item Id of the dye
      const _wearCount = this.readQ(); // amount of dyes required
      const _wearFee = this.readQ(); // amount of Adena required
      const _isAllowed = this.readD(); // meet the requirement or not

    }
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
