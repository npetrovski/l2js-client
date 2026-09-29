import GameServerPacket from "./GameServerPacket";

export default class xC8_RequestSSQStatus extends GameServerPacket {
  write(): void {
    this.writeC(0xc8);
  }
}
