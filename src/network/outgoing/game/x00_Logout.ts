import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x00_Logout extends GameServerPacket {
  write(): void {
    this.writeC(0x00);
  }
}
