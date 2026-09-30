import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xa9)
export default class xA9_TutorialCloseHtml extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }
}
