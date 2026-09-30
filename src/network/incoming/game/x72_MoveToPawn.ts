import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x72)
export default class x72_MoveToPawn extends GameClientPacket {
  CharObjId!: number;
  TargetObjId!: number;
  Distance!: number;
  Location!: number[];
  Destination!: number[];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.CharObjId = this.readD();
    this.TargetObjId = this.readD();
    this.Distance = this.readD();

    this.Location = this.readLoc();
    this.Destination = this.readLoc();

    return true;
  }
}
