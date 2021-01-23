import { ShortcutType } from "../../enums/ShortcutType";
import GameClientPacket from "./GameClientPacket";

export default class ShortCutRegister extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _shortcutType = this.readD();
    const _c4Client = this.readD(); // slot + (page * 12)

    switch (_shortcutType) {
      case ShortcutType.ITEM: {
        const _itemId = this.readD();
        const _charType = this.readD();
        const _sharedReuseGroup = this.readD();
        const _unk0 = this.readD();
        const _unk1 = this.readD();
        const _itemAugmentId = this.readD();
        break;
      }
      case ShortcutType.SKILL: {
        const _skillId = this.readD();
        const _skillLevel = this.readD();
        const _c5 = this.readC();
        const _charType1 = this.readD();
        break;
      }
      case ShortcutType.ACTION:
      case ShortcutType.MACRO:
      case ShortcutType.RECIPE:
      case ShortcutType.BOOKMARK: {
        const _uId = this.readD();
        const _charType2 = this.readD();
        break;
      }
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
