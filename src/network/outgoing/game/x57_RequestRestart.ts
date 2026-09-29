import GameServerPacket from "./GameServerPacket";

export default class x57_RequestRestart extends GameServerPacket {
  write(): void {
    this.writeC(0x57);
  }
}
