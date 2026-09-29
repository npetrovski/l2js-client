import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0xb9)
export default class xB9_MyTargetSelected extends GameClientPacket {
  CreatureObjId!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.CreatureObjId = this.readD();
    const _color = this.readH();

    const _pad = this.readD();

    return true;
  }
}
