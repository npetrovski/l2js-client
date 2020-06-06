import GameClientPacket from "./GameClientPacket";

export default class StopMove extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objectId = this.readD();
    const [_x, _y, _z] = this.readLoc();

    const _heading = this.readD();

    const creature = this.Client.CreaturesList.getEntryByObjectId(_objectId);
    if (creature) {
      creature.setLocation(_x, _y, _z, _heading);
      creature.calculateDistance(this.Client.ActiveChar);
      creature.IsMoving = false;
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
