import GameClientPacket from "./GameClientPacket";

export default class ExFishingEnd extends GameClientPacket {
  ObjectId!: number;

  IsWin!: boolean;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    this.ObjectId = this.readD();
    this.IsWin = this.readC() === 1;

    return true;
  }
}
