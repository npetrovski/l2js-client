import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x20)
export default class x20_ServerClose extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    return true;
  }
}
