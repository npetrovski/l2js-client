import GameServerPacket from "./GameServerPacket";

export default class x7D_RequestRestartPoint extends GameServerPacket {
  constructor(public pointType: number) {
    super();
  }
  write(): void {
    this.writeC(0x7d);
    this.writeD(this.pointType);
  }
}
