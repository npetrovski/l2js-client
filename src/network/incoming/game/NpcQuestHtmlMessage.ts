import GameClientPacket from "./GameClientPacket";

export default class NpcQuestHtmlMessage extends GameClientPacket {

  NpcObjectId: number = 0;
  Html: string = "";
  QuestId: number = 0;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    this.NpcObjId = this.readD();
    this.Html = this.readS();
    this.QuestId = this.readD();

    return true;
  }
}
