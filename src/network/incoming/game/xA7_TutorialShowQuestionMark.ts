import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0xa7)
export default class xA7_TutorialShowQuestionMark extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _markId = this.readD();

    return true;
  }
}
