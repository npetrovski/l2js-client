import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0x7b)
export default class x7B_ShowBoard extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _showComm = this.readC(); // c4 1 to show community 00 to hide

    const _bbshome = this.readS();
    const _bbsgetfav = this.readS();
    const _bbsloc = this.readS();
    const _bbsclan = this.readS();
    const _bbsmemo = this.readS();
    const _bbsmail = this.readS();
    const _bbsfriends = this.readS();
    const _bbsAddFav = this.readS();

    const _content = this.readS();

    return true;
  }
}
