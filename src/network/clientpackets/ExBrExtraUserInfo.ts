import GameClientPacket from "./GameClientPacket";

export default class ExBrExtraUserInfo extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _sub = this.readH();

    let _charObjId = this.readD();
    let _abnormalVisualEffectsEvent = this.readD();
    let _lectureMark = this.readC();

    return true;
  }

  //@Override
  run(): void {}
}
