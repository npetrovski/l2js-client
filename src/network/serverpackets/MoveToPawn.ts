import GameClientPacket from "./GameClientPacket";

export default class MoveToPawn extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _followerObjId = this.readD();
    const _targetObjId = this.readD();
    const _distance = this.readD();

    const [_x, _y, _z] = this.readLoc();
    // const [_xDst, _yDst, _zDst] = this.readLoc();

    const creature = this.Client.CreaturesList.getEntryByObjectId(_followerObjId);
    if (creature) {
      creature.setLocation(_x, _y, _z);
      // creature.setMovingTo(_xDst, _yDst, _zDst);
      creature.calculateDistance(this.Client.ActiveChar);
    }
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
