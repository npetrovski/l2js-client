import GameClientPacket from "./GameClientPacket";
import Location from "../../model/Location";

export default class MoveToLocation extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _charObjId = this.readD();

    let _xDst = this.readD();
    let _yDst = this.readD();
    let _zDst = this.readD();

    let _x = this.readD();
    let _y = this.readD();
    let _z = this.readD();

    if (_charObjId === this.Client.ActiveChar.getObjectId()) {
      this.Client.ActiveChar.setLocation(new Location(_x, _y, _z));
    }

    var npc = this.Client.CreaturesList.getEntryByObjectId(_charObjId);
    if (npc) {
      npc.setLocation(new Location(_x, _y, _z));
    }

    return true;
  }

  //@Override
  run(): void {
    //
  }
}
