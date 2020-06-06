import GameClientPacket from "./GameClientPacket";
import L2Item from "../../entities/L2Item";

export default class EquipUpdate extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _change = this.readD();
    const _objId = this.readD();

    const _bodyPart = this.readD();
    let _l2item = 0;

    switch (_bodyPart) {
      case 0x01:
        _l2item = L2Item.SLOT_L_EAR;
        break;
      case 0x02:
        _l2item = L2Item.SLOT_R_EAR;
        break;
      case 0x03:
        _l2item = L2Item.SLOT_NECK;
        break;
      case 0x04:
        _l2item = L2Item.SLOT_R_FINGER;
        break;
      case 0x05:
        _l2item = L2Item.SLOT_L_FINGER;
        break;
      case 0x06:
        _l2item = L2Item.SLOT_HEAD;
        break;
      case 0x07:
        _l2item = L2Item.SLOT_R_HAND;
        break;
      case 0x08:
        _l2item = L2Item.SLOT_L_HAND;
        break;
      case 0x09:
        _l2item = L2Item.SLOT_GLOVES;
        break;
      case 0x0a:
        _l2item = L2Item.SLOT_CHEST;
        break;
      case 0x0b:
        _l2item = L2Item.SLOT_LEGS;
        break;
      case 0x0c:
        _l2item = L2Item.SLOT_FEET;
        break;
      case 0x0d:
        _l2item = L2Item.SLOT_BACK;
        break;
      case 0x0e:
        _l2item = L2Item.SLOT_LR_HAND;
        break;
      case 0x0f:
        _l2item = L2Item.SLOT_HAIR;
        break;
      case 0x10:
        _l2item = L2Item.SLOT_BELT;
        break;
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
