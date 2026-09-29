import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0x08)
export default class x08_DeleteObject extends GameClientPacket {
  ObjectId!: number;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.ObjectId = this.readD();
    const _unkn1 = this.readD();

    return true;
  }
}
