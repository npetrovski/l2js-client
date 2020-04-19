import GameClientPacket from "./GameClientPacket";
import Appearing from "../serverpackets/Appearing";

export default class TeleportToLocation extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _targetObjectId = this.readD();
    const [_x, _y, _z] = this.readLoc();
    const _unkn1 = this.readD();
    const _heading = this.readD();

    const user = this.Client.ActiveChar;
    if (user && _targetObjectId === user.ObjectId) {
      user.setLocation(_x, _y, _z);
      this.Client.CreaturesList.clear();
    } else {
      const creature = this.Client.CreaturesList.getEntryByObjectId(_targetObjectId);
      if (creature) {
        creature.setLocation(_x, _y, _z);
      }

      const partyMember = this.Client.PartyList.getEntryByObjectId(_targetObjectId);
      if (partyMember) {
        partyMember.setLocation(_x, _y, _z);
      }

      const pet = this.Client.PetList.getEntryByObjectId(_targetObjectId);
      if (pet) {
        pet.setLocation(_x, _y, _z);
      }
    }

    return true;
  }

  // @Override
  run(): void {
    this.Client.sendPacket(new Appearing());
  }
}
