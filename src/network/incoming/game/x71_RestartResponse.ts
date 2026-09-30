import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x71)
export default class x71_RestartResponse extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _result = this.readD(); // 1 or 0

    return true;
  }
}
