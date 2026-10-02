import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x1A_TradeRequest extends GameServerPacket {
  constructor(
    private readonly objId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0x1A);
    this.writeD(this.objId);
  }
}

