import GameClientPacket from "./GameClientPacket";

export default class x7A_StartRotation extends GameClientPacket {
  CharObjectId!: number;
  Degree!: number;
  Side!: number;
  Speed!: number;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.CharObjectId = this.readD();
    this.Degree = this.readD();
    this.Side = this.readD();
    this.Speed = this.readD();

    return true;
  }
}
