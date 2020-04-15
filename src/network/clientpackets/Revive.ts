import GameClientPacket from "./GameClientPacket";
import Location from "../../model/Location";

export default class Revive extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _objectId = this.readD();

    if (_objectId === this.Client.ActiveChar.getObjectId()) {
      this.Client.ActiveChar.setIsDead(false);
      return true;
    }

    var npc = this.Client.CreaturesList.getEntryByObjectId(_objectId);
    if (npc) {
      npc.setIsDead(false);
      return true;
    }

    var npc = this.Client.PartyList.getEntryByObjectId(_objectId);
    if (npc) {
      npc.setIsDead(false);
      return true;
    }

    var npc = this.Client.PetList.getEntryByObjectId(_objectId);
    if (npc) {
      npc.setIsDead(false);
      return true;
    }

    return true;
  }

  //@Override
  run(): void {}
}
