import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x6C_RequestSentPostList extends GameServerPacket {
  write(): void {
    this.writeC(0xd0);
    this.writeH(0x6c);
  }
}
