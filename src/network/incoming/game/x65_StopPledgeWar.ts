import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0x65)
export default class x65_StopPledgeWar extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _pledgeName = this.readS();
    const _playerName = this.readS();

    return true;
  }
}
