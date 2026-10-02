import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export type WarehouseItem = Readonly<{ StoreId: number; Count: number }>;

export default class x3B_WareHouseDepositList extends GameServerPacket {
  constructor(private readonly items: readonly WarehouseItem[]) {
    super();
  }

  write(): void {
    this.writeC(0x3b);
    this.writeD(this.items.length);
    for (const item of this.items) {
      this.writeD(item.StoreId);
      this.writeQ(item.Count);
    }
  }
}
