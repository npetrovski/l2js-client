import GameClientPacket from "./GameClientPacket";

export default class DoorInfo extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _doorObjId = this.readD();
    const [_x, _y, _z] = this.readLoc();

    const _doorId = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
