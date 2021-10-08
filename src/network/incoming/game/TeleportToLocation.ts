import GameClientPacket from "./GameClientPacket";

export default class TeleportToLocation extends GameClientPacket {
  ObjectId!: number;
  Heading!: number;
  Location!: number[];
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.ObjectId = this.readD();
    this.Location = this.readLoc();
    const _unkn1 = this.readD();
    this.Heading = this.readD();

    return true;
  }
}
