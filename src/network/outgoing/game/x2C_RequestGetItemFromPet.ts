import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x2C_RequestGetItemFromPet extends GameServerPacket {
  constructor(
    private readonly itemObjId: number,
    private readonly count: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0x2C);
    this.writeD(this.itemObjId);
    this.writeQ(this.count);
    this.writeD(0);
  }
}

