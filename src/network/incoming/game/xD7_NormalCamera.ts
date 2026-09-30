import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xd7)
export default class xD7_NormalCamera extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }
}
