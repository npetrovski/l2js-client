import GameClientPacket from "./GameClientPacket";
import L2Character from "../../model/actor/L2Character";

export default class TargetSelected extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();

    let _objectId = this.readD();
    let _targetObjectId = this.readD();

    let [_x, _y, _z] = this.readLoc();

    let _unkn1 = this.readD();

    var char!: L2Character | undefined;
    if (this.Client.ActiveChar.getObjectId() === _objectId) {
      char = this.Client.ActiveChar;
    } else {
      char = this.Client.CreaturesList.getEntryByObjectId(_objectId);
    }

    if (!char) {
      return true;
    }

    var target = this.Client.CreaturesList.getEntryByObjectId(_targetObjectId);
    if (target) {
      char.setSelected(target);
    }

    return true;
  }

  //@Override
  run(): void {}
}
