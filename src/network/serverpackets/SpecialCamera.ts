import GameClientPacket from "./GameClientPacket";

export default class SpecialCamera extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objId = this.readD();
    const _distance = this.readD();
    const _heading = this.readD();
    const _pitch = this.readD();
    const _time = this.readD();
    const _durationMS = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
