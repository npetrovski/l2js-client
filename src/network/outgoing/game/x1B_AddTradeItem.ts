import GameServerPacket from "./GameServerPacket";

export default class x1B_AddTradeItem extends GameServerPacket {
  constructor(
    public tradeId: number,
    public objectId: number,
    public count: number
  ) {
    super();
  }
  write(): void {
    this.writeC(0x1b);
    this.writeD(this.tradeId);
    this.writeD(this.objectId);
    this.writeQ(this.count);
  }
}
