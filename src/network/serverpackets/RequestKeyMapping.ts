import GameServerPacket from "./GameServerPacket";

export default class RequestKeyMapping extends GameServerPacket {
  constructor() {
    super(3);
  }

  write(): void {
    this.writeH(0x21d0);
    this.writeC(0);
  }
}
