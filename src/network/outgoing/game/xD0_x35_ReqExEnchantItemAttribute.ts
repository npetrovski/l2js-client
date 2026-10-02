import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x35_ReqExEnchantItemAttribute extends GameServerPacket {
  constructor(
    private readonly objId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x35);
    this.writeD(this.objId);
  }
}

