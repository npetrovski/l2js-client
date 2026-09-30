import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xfe, 0xda)
export default class xFE_xDA_ExBrExtraUserInfo extends GameClientPacket {
  CharObjectId!: number;
  VisualEffect!: number;
  LectureMark!: number;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    this.CharObjectId = this.readD();
    this.VisualEffect = this.readD();
    this.LectureMark = this.readC();

    return true;
  }
}
