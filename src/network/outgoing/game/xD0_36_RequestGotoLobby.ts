import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_36_RequestGotoLobby extends GameServerPacket {
  write(): void {
    this.writeC(0xD0);
    this.writeH(0x36);
  }
}

