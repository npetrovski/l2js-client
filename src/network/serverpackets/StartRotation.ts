import GameClientPacket from "./GameClientPacket";

export default class StartRotation extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _charObjId = this.readD();
    const _degree = this.readD();
    const _side = this.readD();
    const _speed = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
