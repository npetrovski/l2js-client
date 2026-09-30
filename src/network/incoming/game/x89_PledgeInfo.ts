import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x89)
export default class x89_PledgeInfo extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _clanId = this.readD();
    const _clanName = this.readS();
    const _allyName = this.readS();

    return true;
  }
}
