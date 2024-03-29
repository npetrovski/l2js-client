import GameClientPacket from "./GameClientPacket";

export default class VehicleInfo extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _objId = this.readD();
    const [_x, _y, _z] = this.readLoc();
    const _heading = this.readD();

    return true;
  }
}
