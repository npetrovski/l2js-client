import GameClientPacket from "./GameClientPacket";

export default class CharCreateOk extends GameClientPacket {
  result!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.result = this.readD();

    return true;
  }
}
