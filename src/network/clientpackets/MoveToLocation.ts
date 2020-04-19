import GameClientPacket from "./GameClientPacket";

export default class MoveToLocation extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charObjId = this.readD();

    const [_xDst, _yDst, _zDst] = this.readLoc();
    const [_x, _y, _z] = this.readLoc();

    if (_charObjId === this.Client.ActiveChar.ObjectId) {
      this.Client.ActiveChar.setLocation(_xDst, _yDst, _zDst);
    }

    const creature = this.Client.CreaturesList.getEntryByObjectId(_charObjId);
    if (creature) {
      creature.setLocation(_xDst, _yDst, _zDst);
      creature.Distance = this.Client.calculateDistance(this.Client.ActiveChar, creature);
    }

    const partyMember = this.Client.PartyList.getEntryByObjectId(_charObjId);
    if (partyMember) {
      partyMember.setLocation(_xDst, _yDst, _zDst);
      partyMember.Distance = this.Client.calculateDistance(this.Client.ActiveChar, partyMember);
    }

    const pet = this.Client.PetList.getEntryByObjectId(_charObjId);
    if (pet) {
      pet.setLocation(_xDst, _yDst, _zDst);
      pet.Distance = this.Client.calculateDistance(this.Client.ActiveChar, pet);
    }

    const char = this.Client.CharactersList.getEntryByObjectId(_charObjId);
    if (char) {
      char.setLocation(_xDst, _yDst, _zDst);
      char.Distance = this.Client.calculateDistance(this.Client.ActiveChar, char);
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
