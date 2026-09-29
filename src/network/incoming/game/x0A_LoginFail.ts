import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0x0a)
export default class x0A_LoginFail extends GameClientPacket {
  Reason = 0;

  // @Override
  readImpl(): boolean {
    this.readC();
    this.Reason = this.readD();
    return true;
  }
}
