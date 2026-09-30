import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x1c)
export default class x1C_TradeDone extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _num = this.readD();

    return true;
  }
}
