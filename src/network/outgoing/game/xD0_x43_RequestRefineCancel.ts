import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x43_RequestRefineCancel extends GameServerPacket {
  constructor(
    private readonly objId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x43);
    this.writeD(this.objId);
  }
}

