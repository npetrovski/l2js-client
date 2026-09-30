import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xa7)
export default class xA7_TutorialShowQuestionMark extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _markId = this.readD();

    return true;
  }
}
