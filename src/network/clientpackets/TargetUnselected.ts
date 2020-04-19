import GameClientPacket from "./GameClientPacket";

export default class TargetUnselected extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _targetObjectId = this.readD();
    const [_x, _y, _z] = this.readLoc();
    const _unkn1 = this.readD();

    this.Client.ActiveChar.Target = null;
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
