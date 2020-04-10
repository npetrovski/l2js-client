import GameServerPacket from "./GameServerPacket";

export default class CharacterSelect extends GameServerPacket {
  private _charSlotIndex: number;

  constructor(slot: number) {
    super(19);
    this._charSlotIndex = slot;
  }

  write(): void {
    this.writeC(0x12);
    this.writeD(this._charSlotIndex);
    this.writeH(0);
    this.writeD(0);
    this.writeD(0);
    this.writeD(0);
  }
}
