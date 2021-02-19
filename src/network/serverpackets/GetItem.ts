import GameClientPacket from "./GameClientPacket";

export default class GetItem extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _newOwnerId = this.readD();
    const _itemObjId = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
