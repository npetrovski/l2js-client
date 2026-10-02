import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export type PrivateStoreBuyItem = Readonly<{ Id: number; Count: number; Price: number }>;

export default class x9A_RequestSetPrivateStoreListBuy extends GameServerPacket {
  constructor(private readonly items: readonly PrivateStoreBuyItem[]) {
    super();
  }

  write(): void {
    this.writeC(0x9a);
    this.writeD(this.items.length);
    for (const item of this.items) {
      this.writeD(item.Id);
      this.writeD(0);
      this.writeQ(item.Count);
      this.writeQ(item.Price);
      this.writeD(0);
      this.writeD(0);
      this.writeD(0);
      this.writeD(0);
    }
  }
}
