import GameServerPacket from "./GameServerPacket";

export default class RequestManorList extends GameServerPacket {
  constructor() {
    super(3);
  }

  write(): void {
    this.writeH(0x01d0);
    this.writeC(0);
  }
}
