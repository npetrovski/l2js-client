import GameServerPacket from "./GameServerPacket";

export default class RequestSSQStatus extends GameServerPacket {
  write(): void {
    this.writeC(0xc8);
  }
}
