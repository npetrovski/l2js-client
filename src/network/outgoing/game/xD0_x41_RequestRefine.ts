import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x41_RequestRefine extends GameServerPacket {
  constructor(
    private readonly weaponObjId: number,
    private readonly lsObjId: number,
    private readonly gemObjId: number,
    private readonly gemCount: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x41);
    this.writeD(this.weaponObjId);
    this.writeD(this.lsObjId);
    this.writeD(this.gemObjId);
    this.writeQ(this.gemCount);
  }
}

