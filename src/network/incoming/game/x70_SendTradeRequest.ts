import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0x70)
export default class x70_SendTradeRequest extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _senderId = this.readD();

    return true;
  }
}
