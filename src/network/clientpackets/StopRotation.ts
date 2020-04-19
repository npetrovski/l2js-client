import GameClientPacket from "./GameClientPacket";

export default class StopRotation extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charObjId = this.readD();
    const _degree = this.readD();
    const _speed = this.readD();

    const _unkn1 = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
