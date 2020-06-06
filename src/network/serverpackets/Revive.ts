import GameClientPacket from "./GameClientPacket";

export default class Revive extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objectId = this.readD();

    if (_objectId === this.Client.ActiveChar.ObjectId) {
      this.Client.ActiveChar.IsDead = false;
    }

    const creature = this.Client.CreaturesList.getEntryByObjectId(_objectId);
    if (creature) {
      creature.IsDead = false;
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
