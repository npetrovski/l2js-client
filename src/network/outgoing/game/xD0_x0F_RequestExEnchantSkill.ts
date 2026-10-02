import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x0F_RequestExEnchantSkill extends GameServerPacket {
  constructor(
    private readonly skillId: number,
    private readonly skillLevel: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x0F);
    this.writeD(this.skillId);
    this.writeD(this.skillLevel);
  }
}

