import GameClientPacket from "./GameClientPacket";

export default class TradeOtherAdd extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _itemsAddedCount = this.readH();
    const _unk1 = this.readH();
    const _objId = this.readD();
    const _displayId = this.readD();
    const _count = this.readQ();
    const _type2 = this.readH();
    const _custType1 = this.readH();
    const _bodyPart = this.readD();
    const _enchant = this.readH();
    const _unk2 = this.readH();
    const _custType2 = this.readH();

    // Item elemental and enchant
    const _attackElementType = this.readH();
    const _attackElementPower = this.readH();

    const _defAttFire = this.readH();
    const _defAttWater = this.readH();
    const _defAttWind = this.readH();
    const _defAttEarth = this.readH();
    const _defAttHolly = this.readH();
    const _defAttUnholly = this.readH();

    const _enchantOption1 = this.readH();
    const _enchantOption2 = this.readH();
    const _enchantOption3 = this.readH();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
