import GameServerPacket from "./GameServerPacket";

export default class x00_Logout extends GameServerPacket {
  write(): void {
    this.writeC(0x00);
  }
}
