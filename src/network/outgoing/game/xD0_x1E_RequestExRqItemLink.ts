import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x1E_RequestExRqItemLink extends GameServerPacket {
  constructor(
    private readonly itemObjId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x1E);
    this.writeD(this.itemObjId);
  }
}

