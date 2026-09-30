import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x2f)
export default class x2F_MoveToLocation extends GameClientPacket {
  ObjectId!: number;

  Destination!: number[];

  Location!: number[];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.ObjectId = this.readD();

    this.Destination = this.readLoc();
    this.Location = this.readLoc();

    return true;
  }
}
