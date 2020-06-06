import GameClientPacket from "./GameClientPacket";

export default class PetDelete extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _petType = this.readD();
    const _petObjId = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
