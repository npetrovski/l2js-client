import GameServerPacket from "./GameServerPacket";

export default class EnterWorld extends GameServerPacket {
  write(): void {
    this.writeC(0x03);
    this.writeD(0);
    this.writeD(0);
    this.writeD(0);
    this.writeD(0);
  }
}
