import GameServerPacket from "./GameServerPacket";

export default class CharacterSelect extends GameServerPacket {
  private _charSlotIndex: number;

  constructor(slot: number) {
    super();
    this._charSlotIndex = slot;
  }

  write(): void {
    this.writeC(0x0D);
    this.writeD(this._charSlotIndex);
    this.writeD(0);
    this.writeD(0);
    this.writeD(0);
  }
}
