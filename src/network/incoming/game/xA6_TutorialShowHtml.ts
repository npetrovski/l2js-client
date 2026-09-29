import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0xa6)
export default class xA6_TutorialShowHtml extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _html = this.readS();

    return true;
  }
}
