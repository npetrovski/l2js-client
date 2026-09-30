import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xC8_RequestSSQStatus extends GameServerPacket {
  write(): void {
    this.writeC(0xc8);
  }
}
