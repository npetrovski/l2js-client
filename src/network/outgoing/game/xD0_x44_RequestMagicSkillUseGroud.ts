import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x44_RequestMagicSkillUseGroud extends GameServerPacket {
  constructor(
    private readonly x: number,
    private readonly y: number,
    private readonly z: number,
    private readonly skillId: number,
    private readonly ctrlPressed = false,
    private readonly shiftPressed = false
  ) {
    super();
  }

  write(): void {
    this.writeC(0xd0);
    this.writeH(0x44);
    this.writeD(this.x);
    this.writeD(this.y);
    this.writeD(this.z);
    this.writeD(this.skillId);
    this.writeD(this.ctrlPressed ? 1 : 0);
    this.writeC(this.shiftPressed ? 1 : 0);
  }
}
