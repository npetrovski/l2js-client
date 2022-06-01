import GameServerPacket from "./GameServerPacket";

export default class NewCharacter extends GameServerPacket {
  constructor() {
    super();
  }

  write(): void {
    this.writeC(0x13);
  }
}
