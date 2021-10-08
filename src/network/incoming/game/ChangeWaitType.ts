import GameClientPacket from "./GameClientPacket";

export default class ChangeWaitType extends GameClientPacket {
  ObjectId!: number;
  MoveType!: number;
  Location!: number[];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.ObjectId = this.readD();
    this.MoveType = this.readD();

    this.Location = this.readLoc();

    return true;
  }
}
