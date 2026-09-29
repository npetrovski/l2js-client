import GameClientPacket from "./GameClientPacket";

export default class x01_Revive extends GameClientPacket {
  ObjectId!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.ObjectId = this.readD();

    return true;
  }
}
