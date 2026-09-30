import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x75)
export default class x75_FriendList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _size = this.readD();
    for (let i = 0; i < _size; i++) {
      const _objId = this.readD();
      const _name = this.readS();
      const _online = this.readD(); // 0x01 = online
      const _objIdIfOnline = this.readD();
    }

    return true;
  }
}
