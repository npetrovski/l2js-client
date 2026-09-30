import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x29)
export default class x29_ChangeWaitType extends GameClientPacket {
  ObjectId!: number;
  MoveType!: number;
  Location!: number[];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.ObjectId = this.readD();
    this.MoveType = this.readD();

    this.Location = this.readLoc();

    return true;
  }
}
