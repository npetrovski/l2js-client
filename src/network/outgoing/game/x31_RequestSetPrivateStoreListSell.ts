import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export type PrivateStoreSellItem = Readonly<{ ObjectId: number; Count: number; Price: number }>;

export default class x31_RequestSetPrivateStoreListSell extends GameServerPacket {
  constructor(private readonly isPackage: boolean, private readonly items: readonly PrivateStoreSellItem[]) {
    super();
  }

  write(): void {
    this.writeC(0x31);
    this.writeD(this.isPackage ? 1 : 0);
    this.writeD(this.items.length);
    for (const item of this.items) {
      this.writeD(item.ObjectId);
      this.writeQ(item.Count);
      this.writeQ(item.Price);
    }
  }
}
