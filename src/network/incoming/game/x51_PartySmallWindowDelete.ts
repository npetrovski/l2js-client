import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x51)
export default class x51_PartySmallWindowDelete extends GameClientPacket {
  MemberObjId!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.MemberObjId = this.readD();
    const _memberName = this.readS();

    return true;
  }
}
