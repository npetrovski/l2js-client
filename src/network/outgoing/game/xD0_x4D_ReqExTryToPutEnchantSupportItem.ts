import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x4D_ReqExTryToPutEnchantSupportItem extends GameServerPacket {
  constructor(
    private readonly supportObjId: number,
    private readonly enchantObjId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x4D);
    this.writeD(this.supportObjId);
    this.writeD(this.enchantObjId);
  }
}

