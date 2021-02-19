import GameServerPacket from "./GameServerPacket";

export default class EnterWorld extends GameServerPacket {
  write(): void {
    this.writeC(0x03);
  }
}
