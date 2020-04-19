import GameClientPacket from "./GameClientPacket";

export default class MoveToPawn extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charObjId = this.readD();
    const _targetId = this.readD();
    const _distance = this.readD();

    const [_x, _y, _z] = this.readLoc();
    const [_tx, _ty, _tz] = this.readLoc();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
