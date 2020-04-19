import GameClientPacket from "./GameClientPacket";

export default class ExBrExtraUserInfo extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _charObjId = this.readD();
    const _abnormalVisualEffectsEvent = this.readD();
    const _lectureMark = this.readC();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
