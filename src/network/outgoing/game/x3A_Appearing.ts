import GameServerPacket from "./GameServerPacket";

export default class x3A_Appearing extends GameServerPacket {
  write(): void {
    this.writeC(0x3a);
  }
}
