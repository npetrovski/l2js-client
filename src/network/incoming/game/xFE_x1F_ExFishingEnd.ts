import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xfe, 0x1f)
export default class xFE_x1F_ExFishingEnd extends GameClientPacket {
  ObjectId!: number;

  IsWin!: boolean;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    this.ObjectId = this.readD();
    this.IsWin = this.readC() === 1;

    return true;
  }
}
