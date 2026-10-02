import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x60_RequestDestroyItem extends GameServerPacket {
  constructor(
    private readonly objId: number,
    private readonly count: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0x60);
    this.writeD(this.objId);
    this.writeQ(this.count);
  }
}

