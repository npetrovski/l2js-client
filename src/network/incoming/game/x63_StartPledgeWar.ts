import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x63)
export default class x63_StartPledgeWar extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _playerName = this.readS();
    const _pledgeName = this.readS();

    return true;
  }
}
