import GameServerPacket from "@network/outgoing/game/GameServerPacket";
import type { WarehouseItem } from "@network/outgoing/game/x3B_WareHouseDepositList";

export default class x3C_WareHouseWithDrawList extends GameServerPacket {
  private readonly items: readonly WarehouseItem[];

  constructor(items: readonly WarehouseItem[]) {
    super();
    this.items = items.filter((item) => item.Count > 0);
  }

  write(): void {
    this.writeC(0x3c);
    this.writeD(this.items.length);
    for (const item of this.items) {
      this.writeD(item.StoreId);
      this.writeQ(item.Count);
    }
  }
}
