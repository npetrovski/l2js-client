import GameClientPacket from "./GameClientPacket";

export default class NpcHtmlMessage extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _npcObjId = this.readD();
    const _html = this.readS();
    const _itemId = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
