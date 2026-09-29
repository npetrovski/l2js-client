import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0x14)
export default class x14_TradeStart extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objId = this.readD();
    const _size = this.readH();
    for (let i = 0; i < _size; i++) {
      const _item = this.readItem();
    }

    return true;
  }
}
