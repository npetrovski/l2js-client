import GameClientPacket from "./GameClientPacket";

export default class DeleteObject extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objectId = this.readD();
    const _unkn1 = this.readD();

    this.Client.CreaturesList.removeByObjectId(_objectId);
    this.Client.DroppedItems.removeByObjectId(_objectId);
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
