import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0xba)
export default class xBA_PartyMemberPosition extends GameClientPacket {
  Members: Record<number, number[]> = {};

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _size = this.readD();
    for (let i = 0; i < _size; i++) {
      const _objId = this.readD();
      const loc: number[] = this.readLoc();

      this.Members[_objId] = loc;
    }

    return true;
  }
}
