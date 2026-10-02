import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x65_RequestPostItemList extends GameServerPacket {
  write(): void {
    this.writeC(0xD0);
    this.writeH(0x65);
  }
}

