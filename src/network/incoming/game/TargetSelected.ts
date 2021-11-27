import GameClientPacket from "./GameClientPacket";

export default class TargetSelected extends GameClientPacket {
  ObjectId!: number;
  TargetObjectId!: number;
  Location!: number[];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.ObjectId = this.readD();
    this.TargetObjectId = this.readD();

    this.Location = this.readLoc();

    const _unkn1 = this.readD();

    return true;
  }
}
