import GameClientPacket from "./GameClientPacket";

export default class StopMove extends GameClientPacket {
  ObjectId!: number;
  Heading!: number;
  Location!: number[];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.ObjectId = this.readD();
    this.Location = this.readLoc();
    this.Heading = this.readD();

    return true;
  }
}
