import GameClientPacket from "./GameClientPacket";

export default class ExRotation extends GameClientPacket {
  CharObjectId!: number;
  Heading!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    this.CharObjectId = this.readD();
    this.Heading = this.readD();

    return true;
  }
}
