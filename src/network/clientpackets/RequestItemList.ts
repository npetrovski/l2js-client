import GameServerPacket from "./GameServerPacket";

export default class RequestItemList extends GameServerPacket {
  write(): void {
    this.writeC(0x14);
  }
}
