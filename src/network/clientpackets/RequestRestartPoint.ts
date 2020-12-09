import GameServerPacket from "./GameServerPacket";

export default class RequestRestartPoint extends GameServerPacket {
  constructor(public pointType: number) {
    super();
  }
  write(): void {
    this.writeC(0x7d);
    this.writeD(this.pointType);
  }
}
