import GameClientPacket from "./GameClientPacket";

export default class SpecialCamera extends GameClientPacket {
  private _skyState!: number;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objId = this.readD();
    const _force = this.readD();
    const _angle1 = this.readD();
    const _angle2 = this.readD();
    const _time = this.readD();
    const _duration = this.readD();
    const _relYaw = this.readD();
    const _relPitch = this.readD();
    const _isWide = this.readD();
    const _relAngle = this.readD();
    const _unk = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
