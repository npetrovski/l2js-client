import GameServerPacket from "./GameServerPacket";

export default class CharacterSelect extends GameServerPacket {
  constructor(public slot: number) {
    super();
  }

  write(): void {
    this.writeC(0x0d);
    this.writeD(this.slot);
  }
}
