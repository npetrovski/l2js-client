import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0xfe, 0x22)
export default class xFE_x22_ExSendManorList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _castlesSize = this.readD();
    for (let i = 0; i < _castlesSize; i++) {
      const _residenceId = this.readD();
      const _castleName = this.readS();
    }

    return true;
  }
}
