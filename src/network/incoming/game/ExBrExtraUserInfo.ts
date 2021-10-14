import GameClientPacket from "./GameClientPacket";

export default class ExBrExtraUserInfo extends GameClientPacket {
  CharObjectId!: number;
  VisualEffect!: number;
  LectureMark!: number;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    this.CharObjectId = this.readD();
    this.VisualEffect = this.readD();
    this.LectureMark = this.readC();

    return true;
  }
}
