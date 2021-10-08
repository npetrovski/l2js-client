import GameServerPacket from "./GameServerPacket";

export default class Logout extends GameServerPacket {
  write(): void {
    this.writeC(0x00);
  }
}
