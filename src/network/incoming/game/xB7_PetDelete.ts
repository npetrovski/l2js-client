import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xb7)
export default class xB7_PetDelete extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _petType = this.readD();
    const _petObjId = this.readD();

    return true;
  }
}
