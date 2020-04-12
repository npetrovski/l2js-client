import GameClientPacket from "./GameClientPacket";

export default class NpcQuestHtmlMessage extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _sub = this.readH();

    let _npcObjId = this.readD();

    let _html = this.readS();

    let _questId = this.readD();

    return true;
  }

  //@Override
  run(): void {}
}
