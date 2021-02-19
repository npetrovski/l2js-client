import GameClientPacket from "./GameClientPacket";

export default class FinishRotating extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _objId = this.readD();
    const _heading = this.readD();
    const _direction = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
