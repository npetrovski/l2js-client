import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0x25)
export default class x25_AutoAttackStart extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _targetObjId = this.readD();

    return true;
  }
}
