import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x01_RequestManorList extends GameServerPacket {
  write(): void {
    this.writeH(0x01d0);
    this.writeC(0);
  }
}
