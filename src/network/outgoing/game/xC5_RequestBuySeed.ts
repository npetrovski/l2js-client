import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export type SeedPurchaseItem = Readonly<{ Id: number; Count: number }>;

export default class xC5_RequestBuySeed extends GameServerPacket {
  constructor(private readonly manorId: number, private readonly items: readonly SeedPurchaseItem[]) {
    super();
  }

  write(): void {
    this.writeC(0xc5);
    this.writeD(this.manorId);
    this.writeD(this.items.length);
    for (const item of this.items) {
      this.writeD(item.Id);
      this.writeQ(item.Count);
    }
  }
}
