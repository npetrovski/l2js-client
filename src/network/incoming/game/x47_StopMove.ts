import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0x47)
export default class x47_StopMove extends GameClientPacket {
  ObjectId!: number;
  Heading!: number;
  Location!: number[];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.ObjectId = this.readD();
    this.Location = this.readLoc();
    this.Heading = this.readD();

    return true;
  }
}
