import GameClientPacket from "./GameClientPacket";
import Location from "../../model/Location";

export default class ValidateLocation extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _charObjId = this.readD();

    let [_x, _y, _z] = this.readLoc();

    let _heading = this.readD();

    if (_charObjId === this.Client.ActiveChar.getObjectId()) {
      this.Client.ActiveChar.setLocation(new Location(_x, _y, _z, _heading));
    }

    var npc = this.Client.CreaturesList.getEntryByObjectId(_charObjId);
    if (npc) {
      npc.setLocation(new Location(_x, _y, _z, _heading));
    }

    var npc = this.Client.PartyList.getEntryByObjectId(_charObjId);
    if (npc) {
      npc.setLocation(new Location(_x, _y, _z, _heading));
    }

    var npc = this.Client.PetList.getEntryByObjectId(_charObjId);
    if (npc) {
      npc.setLocation(new Location(_x, _y, _z, _heading));
    }

    return true;
  }

  //@Override
  run(): void {}
}
