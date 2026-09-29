import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0xfe, 0xe1)
export default class xFE_xE1_ExNevitAdventTimeChange extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _paused = this.readC(); // state 0 - pause 1 - started
    const _time = this.readD(); // left time in ms max is 16000 its 4m and state is automatically changed to quit

    return true;
  }
}
