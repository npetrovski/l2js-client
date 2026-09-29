import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0xfe, 0xdf)
export default class xFE_xDF_ExNevitAdventPointInfoPacket extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _points = this.readD(); // 72 = 1%, max 7200 = 100%

    return true;
  }
}
