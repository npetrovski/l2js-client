import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";
@GamePacket(0x13)
export default class x13_SunSet extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }
}
