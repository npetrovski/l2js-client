import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x22)
export default class x22_TeleportToLocation extends GameClientPacket {
  ObjectId!: number;
  Heading!: number;
  Location!: number[];
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.ObjectId = this.readD();
    this.Location = this.readLoc();
    const _unkn1 = this.readD();
    this.Heading = this.readD();

    return true;
  }
}
