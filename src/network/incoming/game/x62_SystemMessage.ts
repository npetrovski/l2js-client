import { GamePacket } from "@network/PacketRegistry";

import AbstractMessagePacket from "@network/incoming/game/AbstractMessagePacket";

@GamePacket(0x62)
export default class x62_SystemMessage extends AbstractMessagePacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.readMe();

    return true;
  }
}
