import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x70)
export default class x70_SendTradeRequest extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _senderId = this.readD();

    return true;
  }
}
