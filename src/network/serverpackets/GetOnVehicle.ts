import GameClientPacket from "./GameClientPacket";

export default class GetOnVehicle extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _objId = this.readD();
    const _vehicleId = this.readD();
    const [_x, _y, _z] = this.readLoc();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
