import GameClientPacket from "./GameClientPacket";

export default class MoveToLocationInVehicle extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charObjId = this.readD();
    const _vehicleObjId = this.readD();

    const [_xDst, _yDst, _zDst] = this.readLoc();
    const _heading = this.readD();

    const creature = this.Client.CreaturesList.getEntryByObjectId(_charObjId);
    if (creature) {
      creature.setMovingTo(_xDst, _yDst, _zDst);
      creature.calculateDistance(this.Client.ActiveChar);
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
