import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x50_RequestSkillList extends GameServerPacket {
  write(): void {
    this.writeC(0x50);
  }
}
