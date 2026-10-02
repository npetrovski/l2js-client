import GameServerPacket from "@network/outgoing/game/GameServerPacket";
import type { PrivateStoreSellItem } from "@network/outgoing/game/x31_RequestSetPrivateStoreListSell";

export default class x83_RequestPrivateStoreBuy extends GameServerPacket {
  constructor(private readonly ownerObjectId: number, private readonly items: readonly PrivateStoreSellItem[]) {
    super();
  }

  write(): void {
    this.writeC(0x83);
    this.writeD(this.ownerObjectId);
    this.writeD(this.items.length);
    for (const item of this.items) {
      this.writeD(item.ObjectId);
      this.writeQ(item.Count);
      this.writeQ(item.Price);
    }
  }
}
