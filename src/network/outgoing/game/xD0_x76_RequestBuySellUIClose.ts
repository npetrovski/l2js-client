import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x76_RequestBuySellUIClose extends GameServerPacket {
  write(): void {
    this.writeC(0xD0);
    this.writeH(0x76);
  }
}

