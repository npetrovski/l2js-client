import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0x01)
export default class x01_Revive extends GameClientPacket {
  ObjectId!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.ObjectId = this.readD();

    return true;
  }
}
