import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xfe, 0x8d)
export default class xFE_x8D_NpcQuestHtmlMessage extends GameClientPacket {
  NpcObjectId: number = 0;
  Html: string = "";
  QuestId: number = 0;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    this.NpcObjectId = this.readD();
    this.Html = this.readS();
    this.QuestId = this.readD();

    return true;
  }
}
