import GameServerPacket from "./GameServerPacket";

export default class MultiSellChoose extends GameServerPacket {
  constructor(private _listId: number, private _entryId: number, private _amount: number) {
    super();
  }

  write(): void {
    this.writeC(0xb0);
    this.writeD(this._listId);
    this.writeD(this._entryId);
    this.writeQ(this._amount);

    this.writeH(0);
    this.writeD(0);
    this.writeD(0);
    this.writeH(0);
    this.writeH(0);
    this.writeH(0);
    this.writeH(0);
    this.writeH(0);
    this.writeH(0);
    this.writeH(0);
    this.writeH(0);
  }
}
