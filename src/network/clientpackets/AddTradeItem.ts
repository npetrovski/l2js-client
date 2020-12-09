import GameServerPacket from "./GameServerPacket";

export default class AddTradeItem extends GameServerPacket {
  constructor(public tradeId: number, public objectId: number, public count: number) {
    super();
  }
  write(): void {
    this.writeC(0x1b);
    this.writeD(this.tradeId);
    this.writeD(this.objectId);
    this.writeQ(this.count);
  }
}
