import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x33_RequestExEnchantSkillUntrain extends GameServerPacket {
  constructor(
    private readonly skillId: number,
    private readonly skillLevel: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x33);
    this.writeD(this.skillId);
    this.writeD(this.skillLevel);
  }
}

