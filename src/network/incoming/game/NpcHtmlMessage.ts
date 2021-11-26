import GameClientPacket from "./GameClientPacket";

export default class NpcHtmlMessage extends GameClientPacket {
  NpcObjectId: number = 0;
  Html: string = "";
  ItemId: number = 0;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.NpcObjectId = this.readD();
    this.Html = this.readS();
    this.ItemId = this.readD();

    return true;
  }
}
