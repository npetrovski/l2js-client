import GameClientPacket from "./GameClientPacket";
import { ShortcutType } from "../../enums/ShortcutType";

export default class ShortCutInit extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _shortcutCount = this.readD();
    for(let i = 0; i < _shortcutCount; i++) {
      const _shortcutSlotBase10 = this.readD();
      const _shortcutType = this.readD();

      switch (_shortcutType) {
        case ShortcutType.ITEM: {
          const _itemId = this.readD();
          break;
        }
        case ShortcutType.SKILL: {
          const _skillId = this.readD();
          break;
        }
        case ShortcutType.ACTION:
        case ShortcutType.MACRO:
        case ShortcutType.RECIPE:
        case ShortcutType.BOOKMARK: {
          const _uId = this.readD();
          break;
        }
      }

      const _unk1 = this.readD();
      const _unk2 = this.readD();
    }



    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
