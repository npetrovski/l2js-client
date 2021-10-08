import GameClientPacket from "./GameClientPacket";

export default class MoveToPawn extends GameClientPacket {
  CharObjId!: number;
  TargetObjId!: number;
  Distance!: number;
  Location!: number[];
  Destination!: number[];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.CharObjId = this.readD();
    this.TargetObjId = this.readD();
    this.Distance = this.readD();

    this.Location = this.readLoc();
    this.Destination = this.readLoc();

    return true;
  }
}
