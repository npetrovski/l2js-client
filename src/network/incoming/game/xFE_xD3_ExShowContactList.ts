import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xfe, 0xd3)
export default class xFE_xD3_ExShowContactList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _contacts = this.readD();
    for (let i = 0; i < _contacts; i++) {
      const _name = this.readS();
    }

    return true;
  }
}
