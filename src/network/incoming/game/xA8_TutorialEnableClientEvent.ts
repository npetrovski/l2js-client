import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xa8)
export default class xA8_TutorialEnableClientEvent extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _eventId = this.readD();

    return true;
  }
}
