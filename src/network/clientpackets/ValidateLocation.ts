import GameClientPacket from "./GameClientPacket";

export default class ValidateLocation extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charObjId = this.readD();
    const [_x, _y, _z] = this.readLoc();
    const _heading = this.readD();

    if (_charObjId === this.Client.ActiveChar.ObjectId) {
      this.Client.ActiveChar.setLocation(_x, _y, _z, _heading);
    }

    const creature = this.Client.CreaturesList.getEntryByObjectId(_charObjId);
    if (creature) {
      creature.setLocation(_x, _y, _z, _heading);
    }

    const partyMember = this.Client.PartyList.getEntryByObjectId(_charObjId);
    if (partyMember) {
      partyMember.setLocation(_x, _y, _z, _heading);
    }

    const pet = this.Client.PetList.getEntryByObjectId(_charObjId);
    if (pet) {
      pet.setLocation(_x, _y, _z, _heading);
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
