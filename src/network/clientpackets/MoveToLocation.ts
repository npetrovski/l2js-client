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

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
