import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export type PrivateStorePurchaseItem = Readonly<{
  ObjectId: number;
  Id: number;
  Count: number;
  Price: number;
}>;

export default class x9F_RequestPrivateStoreSell extends GameServerPacket {
  constructor(private readonly ownerObjectId: number, private readonly items: readonly PrivateStorePurchaseItem[]) {
    super();
  }

  write(): void {
    this.writeC(0x9f);
    this.writeD(this.ownerObjectId);
    this.writeD(this.items.length);
    for (const item of this.items) {
      this.writeD(item.ObjectId);
      this.writeD(item.Id);
      this.writeH(0);
      this.writeH(0);
      this.writeQ(item.Count);
      this.writeQ(item.Price);
    }
  }
}
