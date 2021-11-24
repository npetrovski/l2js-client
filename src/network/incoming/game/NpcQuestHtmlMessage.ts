import GameClientPacket from "./GameClientPacket";

export default class NpcQuestHtmlMessage extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _npcObjId = this.readD();
    const _html = this.readS();
    const _questId = this.readD();

    // TODO: Trigger from mutator
    // GlobalEvents.fire("NpcQuestHtmlMessage", {
    //   npcObjectId: _npcObjId,
    //   html: _html,
    //   questId: _questId
    // });

    return true;
  }
}
