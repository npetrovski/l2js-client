import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x46_ReqExEnchantSkillInfoDetail extends GameServerPacket {
  constructor(
    private readonly type: number,
    private readonly skillId: number,
    private readonly skillLevel: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x46);
    this.writeD(this.type);
    this.writeD(this.skillId);
    this.writeD(this.skillLevel);
  }
}

