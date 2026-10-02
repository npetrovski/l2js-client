import { GamePacket } from "@network/PacketRegistry";
import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xbf)
export default class xBF_PrivateStoreMsgBuy extends GameClientPacket {
  ObjectId = 0;
  Message = "";

  readImpl(): boolean {
    this.readC();
    this.ObjectId = this.readD();
    this.Message = this.readS();
    return true;
  }
}
