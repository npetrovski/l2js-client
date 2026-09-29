import { GamePacket } from "../../PacketRegistry";

import AbstractMessagePacket from "./AbstractMessagePacket";

@GamePacket(0x62)
export default class x62_SystemMessage extends AbstractMessagePacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.readMe();

    return true;
  }
}
