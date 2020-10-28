import GameClientPacket from "./GameClientPacket";
import { ShortcutType } from "../../enums/ShortcutType";
import { GlobalEvents } from "../../mmocore/EventEmitter";
export default class ShortCutInit extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    // var _shortCuts: Shortcut[] = [];

    // let _id = this.readC();
    // let _shortCutsLength = this.readD();
    // for (var i = 0; i < _shortCutsLength; i++) {
    //   var sc = new Shortcut();
    //   sc.setType(this.readD());
    //   var c = this.readD(); // slot + (page * 12)
    //   switch (sc.getType()) {
    //     case ShortcutType.ITEM:
    //       sc.setId(this.readD());
    //       let _unkn1 = this.readD();
    //       sc.setSharedReuseGroup(this.readD());
    //       let _unkn2 = this.readD();
    //       let _unkn3 = this.readD();
    //       let _unkn4 = this.readH();
    //       let _unkn5 = this.readH();
    //       break;
    //     case ShortcutType.SKILL:
    //       sc.setId(this.readD());
    //       sc.setLevel(this.readD());
    //       let _unkn6 = this.readC();
    //       let _unkn7 = this.readD();
    //       break;
    //     case ShortcutType.ACTION:
    //     case ShortcutType.MACRO:
    //     case ShortcutType.RECIPE:
    //     case ShortcutType.BOOKMARK:
    //       sc.setId(this.readD());
    //       let _unkn8 = this.readD();
    //       break;
    //   }
    //   _shortCuts.push(sc);
    // }

    /// this.Client.ActiveChar.setShortCuts(_shortCuts);

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
