import GameClientPacket from "./GameClientPacket";

export default class PetDelete extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _petType = this.readD();
    let _petObjId = this.readD();

    return true;
  }

  //@Override
  run(): void {
    //
  }
}
