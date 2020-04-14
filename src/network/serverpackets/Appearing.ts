import GameServerPacket from "./GameServerPacket";

export default class Appearing extends GameServerPacket {
  write(): void {
    this.writeC(0x3a);
  }
}
