import GameClientPacket from "./GameClientPacket";

export default class DeleteObject extends GameClientPacket {
  ObjectId!: number;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.ObjectId = this.readD();
    const _unkn1 = this.readD();

    return true;
  }
}
