import GameServerPacket from "./GameServerPacket";

export default class x13_NewCharacter extends GameServerPacket {
  constructor() {
    super();
  }

  write(): void {
    this.writeC(0x13);
  }
}
