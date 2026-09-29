import GameServerPacket from "./GameServerPacket";

export default class xD0_x21_RequestKeyMapping extends GameServerPacket {
  write(): void {
    this.writeH(0x21d0);
    this.writeC(0);
  }
}
