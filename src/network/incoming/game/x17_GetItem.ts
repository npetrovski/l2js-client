import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x17)
export default class x17_GetItem extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _playerId = this.readD();
    const _objId = this.readD();

    const [x, y, z] = this.readLoc();

    return true;
  }
}
