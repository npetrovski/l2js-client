import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x0f)
export default class x0F_CharCreateOk extends GameClientPacket {
  result!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.result = this.readD();

    return true;
  }
}
