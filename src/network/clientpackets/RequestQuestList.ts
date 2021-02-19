import GameServerPacket from "./GameServerPacket";

export default class RequestQuestList extends GameServerPacket {
  write(): void {
    this.writeC(0x63);
  }
}
