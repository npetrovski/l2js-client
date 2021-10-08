import GameServerPacket from "./GameServerPacket";

export default class RequestRestart extends GameServerPacket {
  write(): void {
    this.writeC(0x57);
  }
}
