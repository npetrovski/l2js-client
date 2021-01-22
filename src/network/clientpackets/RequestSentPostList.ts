import GameServerPacket from "./GameServerPacket";

export default class RequestSentPostList extends GameServerPacket {
  write(): void {
    this.writeC(0xd0);
    this.writeH(0x6c);
  }
}
