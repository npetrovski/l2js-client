import GameClientPacket from "./GameClientPacket";
import Location from "../../model/Location";
import Appearing from "../serverpackets/Appearing";

export default class TeleportToLocation extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();

    let _targetObjectId = this.readD();

    let [_x, _y, _z] = this.readLoc();

    let _unkn1 = this.readD();

    let _heading = this.readD();

    var user = this.Client.ActiveChar;
    if (user && _targetObjectId == user.getObjectId()) {
      user.setLocation(new Location(_x, _y, _z));
      this.Client.CreaturesList.clear();
    } else {
      var npc = this.Client.CreaturesList.getEntryByObjectId(_targetObjectId);
      if (npc) {
        npc.setLocation(new Location(_x, _y, _z));
      }

      var npc = this.Client.PartyList.getEntryByObjectId(_targetObjectId);
      if (npc) {
        npc.setLocation(new Location(_x, _y, _z));
      }

      var npc = this.Client.PetList.getEntryByObjectId(_targetObjectId);
      if (npc) {
        npc.setLocation(new Location(_x, _y, _z));
      }
    }

    return true;
  }

  //@Override
  run(): void {
    this.Client.sendPacket(new Appearing());
  }
}
