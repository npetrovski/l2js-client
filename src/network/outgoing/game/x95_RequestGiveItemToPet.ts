import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x95_RequestGiveItemToPet extends GameServerPacket {
  constructor(
    private readonly itemObjId: number,
    private readonly count: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0x95);
    this.writeD(this.itemObjId);
    this.writeQ(this.count);
  }
}

