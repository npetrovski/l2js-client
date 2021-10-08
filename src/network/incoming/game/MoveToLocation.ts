import GameClientPacket from "./GameClientPacket";

export default class MoveToLocation extends GameClientPacket {
  ObjectId!: number;

  Destination!: number[];

  Location!: number[];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.ObjectId = this.readD();

    this.Destination = this.readLoc();
    this.Location = this.readLoc();

    return true;
  }
}
