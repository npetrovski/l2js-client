import GameClientPacket from "./GameClientPacket";

export default class TargetUnselected extends GameClientPacket {
  ObjectId!: number;
  Location!: number[];
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.ObjectId = this.readD();
    this.Location = this.readLoc();
    const _unkn1 = this.readD();

    return true;
  }
}
