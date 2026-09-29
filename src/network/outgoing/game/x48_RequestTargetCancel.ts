import GameServerPacket from "./GameServerPacket";

export default class x48_RequestTargetCancel extends GameServerPacket {
  write(): void {
    this.writeC(0x48);
    this.writeH(1);
  }
}
