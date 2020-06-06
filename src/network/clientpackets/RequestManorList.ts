import GameServerPacket from "./GameServerPacket";

export default class RequestManorList extends GameServerPacket {
  write(): void {
    this.writeH(0x01d0);
    this.writeC(0);
  }
}
