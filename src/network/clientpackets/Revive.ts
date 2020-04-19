import GameClientPacket from "./GameClientPacket";

export default class Revive extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objectId = this.readD();

    if (_objectId === this.Client.ActiveChar.ObjectId) {
      this.Client.ActiveChar.IsDead = false;
      return true;
    }

    const creature = this.Client.CreaturesList.getEntryByObjectId(_objectId);
    if (creature) {
      creature.IsDead = false;
      return true;
    }

    const partyPlayer = this.Client.PartyList.getEntryByObjectId(_objectId);
    if (partyPlayer) {
      partyPlayer.IsDead = false;
      return true;
    }

    const pet = this.Client.PetList.getEntryByObjectId(_objectId);
    if (pet) {
      pet.IsDead = false;
      return true;
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
