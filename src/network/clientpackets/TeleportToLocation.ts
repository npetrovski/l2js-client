import GameClientPacket from "./GameClientPacket";
import Location from "../../model/Location";
import Appearing from "../serverpackets/Appearing";

export default class TeleportToLocation extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();

    let _targetObjectId = this.readD();

    let _x = this.readD();
    let _y = this.readD();
    let _z = this.readD();

    let _unkn1 = this.readD();

    let _heading = this.readD();

    var user = this.Client.ActiveChar;
    if (user && _targetObjectId == user.getObjectId()) {
      user.setLocation(new Location(_x, _y, _z));
      this.Client.CreaturesList.clear();
    }

    return true;
  }

  //@Override
  run(): void {
    this.Client.sendPacket(new Appearing());
  }
}
