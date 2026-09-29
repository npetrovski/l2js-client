import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0xfe, 0xc1)
export default class xFE_xC1_ExRotation extends GameClientPacket {
  CharObjectId!: number;
  Heading!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    this.CharObjectId = this.readD();
    this.Heading = this.readD();

    return true;
  }
}
