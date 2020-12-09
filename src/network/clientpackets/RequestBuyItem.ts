import L2Item from "../../entities/L2Item";
import GameServerPacket from "./GameServerPacket";

export default class RequestBuyItem extends GameServerPacket {
  constructor(public listId: number, public items: L2Item[]) {
    super();
  }
  write(): void {
    this.writeC(0x40);
    this.writeD(this.listId);
    this.writeD(this.items.length);

    for (const item of this.items) {
      this.writeD(item.Id);
      this.writeQ(item.Count);
    }
  }
}
