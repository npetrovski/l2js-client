import GameServerPacket from "./GameServerPacket";

export default class RequestSkillList extends GameServerPacket {
  write(): void {
    this.writeC(0x50);
  }
}
