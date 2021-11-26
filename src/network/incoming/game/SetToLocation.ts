import GameClientPacket from "./GameClientPacket";

export default class SetToLocation extends GameClientPacket {
  ObjectId!: number;

  Destination!: number[];

  Heading!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.ObjectId = this.readD();

    this.Destination = this.readLoc();
    this.Heading = this.readD();

    return true;
  }
}
