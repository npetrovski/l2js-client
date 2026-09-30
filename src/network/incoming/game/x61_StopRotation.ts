import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x61)
export default class x61_StopRotation extends GameClientPacket {
  CharObjectId!: number;
  Degree!: number;
  Speed!: number;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.CharObjectId = this.readD();
    this.Degree = this.readD();
    this.Speed = this.readD();

    return true;
  }
}
