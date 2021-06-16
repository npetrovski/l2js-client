import L2Item from "../../entities/L2Item";
import GameServerPacket from "./GameServerPacket";

export default class RequestSellItem extends GameServerPacket {
  constructor(private _listId: number, private _items: L2Item[]) {
    super();
  }
  write(): void {
    this.writeC(0x37);

    this.writeD(this._listId);

    this.writeD(this._items.length);

    for (const item of this._items) {
      this.writeD(item.ObjectId);
      this.writeD(item.Id);
      this.writeQ(item.Count);
    }
  }
}
