import GameServerPacket from "./GameServerPacket";

export default class RequestTargetCancel extends GameServerPacket {
  write(): void {
    this.writeC(0x48);
    this.writeH(1);
  }
}
