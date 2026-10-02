import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x62_RequestQuestList extends GameServerPacket {
  write(): void {
    this.writeC(0x62);
  }
}

