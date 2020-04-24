import GameClientPacket from "./GameClientPacket";

export default class MoveToLocation extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charObjId = this.readD();

    const [_xDst, _yDst, _zDst] = this.readLoc();
    const [_x, _y, _z] = this.readLoc();

    const creature = this.Client.CreaturesList.getEntryByObjectId(_charObjId);
    if (creature) {
      //console.log([_x, _y, _z], [_xDst, _yDst, _zDst], creature.CurrentSpeed);
      creature.setLocation(_x, _y, _z);
      creature.setMovingTo(_xDst, _yDst, _zDst);
      creature.Distance = this.Client.calculateDistance(this.Client.ActiveChar, creature);
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
