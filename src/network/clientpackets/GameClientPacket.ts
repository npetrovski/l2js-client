import ReceivablePacket from "../../mmocore/ReceivablePacket";
import GameClient from "../GameClient";
import L2Item from "../../entities/L2Item";

export default abstract class GameClientPacket extends ReceivablePacket<GameClient> {
  // @Override
  read(): boolean {
    try {
      return this.readImpl();
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  readItem(): L2Item {
    const item = new L2Item();
    item.ObjectId = this.readD();
    item.Id = this.readD();
    const _location = this.readD();
    item.Count = this.readQ();
    const _type = this.readH(); // Item Type 2 : 00-weapon, 01-shield/armor, 02-ring/earring/necklace, 03-questitem, 04-adena, 05-item
    const _customType = this.readH();
    item.IsEquipped = this.readH() === 1;
    const _bodyPart = this.readD(); // Slot : 0006-lr.ear, 0008-neck, 0030-lr.finger, 0040-head, 0100-l.hand, 0200-gloves, 0400-chest, 0800-pants, 1000-feet, 4000-r.hand, 8000-r.hand
    item.EnchantLevel = this.readH();
    const _customType2 = this.readH();
    item.AugmentBonus = this.readD();
    const _mana = this.readD();
    const _time = this.readD();

    // Item elemental and enchant
    const attackElementType = this.readH();
    item.AttackElementVal = this.readH();

    item.DefAttFire = this.readH();
    item.DefAttWater = this.readH();
    item.DefAttWind = this.readH();
    item.DefAttEarth = this.readH();
    item.DefAttHolly = this.readH();
    item.DefAttUnholly = this.readH();

    const _enchantOption1 = this.readH();
    const _enchantOption2 = this.readH();
    const _enchantOption3 = this.readH();

    return item;
  }

  abstract readImpl(): boolean;
}
