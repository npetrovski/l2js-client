import GameClientPacket from "./GameClientPacket";

export default class StopRotation extends GameClientPacket {
  CharObjectId!: number;
  Degree!: number;
  Speed!: number;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.CharObjectId = this.readD();
    this.Degree = this.readD();
    this.Speed = this.readD();

    return true;
  }
}
