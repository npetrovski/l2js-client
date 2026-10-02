import { GamePacket } from "@network/PacketRegistry";
import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xfe, 0x80)
export default class xFE_x80_ExPrivateStoreSetWholeMsg extends GameClientPacket {
  ObjectId = 0;
  Message = "";

  readImpl(): boolean {
    this.readC();
    this.readH();
    this.ObjectId = this.readD();
    this.Message = this.readS();
    return true;
  }
}
