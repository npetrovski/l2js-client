import GameClientPacket from "./GameClientPacket";

export default class DeleteObject extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _objectId = this.readD();
    let _unkn1 = this.readD();

    this.Client.CreaturesList.removeByObjectId(_objectId);
    return true;
  }

  //@Override
  run(): void {
    //
  }
}
