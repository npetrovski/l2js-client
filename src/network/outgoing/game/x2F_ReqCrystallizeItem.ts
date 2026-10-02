import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x2F_ReqCrystallizeItem extends GameServerPacket {
  constructor(
    private readonly objId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0x2F);
    this.writeD(this.objId);
    this.writeD(1);
  }
}

