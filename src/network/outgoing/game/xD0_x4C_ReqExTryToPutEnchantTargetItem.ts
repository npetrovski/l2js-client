import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x4C_ReqExTryToPutEnchantTargetItem extends GameServerPacket {
  constructor(
    private readonly objId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x4C);
    this.writeD(this.objId);
  }
}

