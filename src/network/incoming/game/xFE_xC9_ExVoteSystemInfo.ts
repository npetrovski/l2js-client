import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0xfe, 0xc9)
export default class xFE_xC9_ExVoteSystemInfo extends GameClientPacket {
  RecommLeft!: number;
  RecommHave!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    this.RecommLeft = this.readD();
    this.RecommHave = this.readD();
    const _recoBonusTime = this.readD();
    const _recoBonusVal = this.readD();
    const _recoBonusType = this.readD();

    return true;
  }
}
