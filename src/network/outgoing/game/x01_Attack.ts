import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x01_Attack extends GameServerPacket {
  constructor(
    private readonly objectId: number,
    private readonly originX: number,
    private readonly originY: number,
    private readonly originZ: number,
    private readonly shiftPressed = false
  ) {
    super();
  }

  write(): void {
    this.writeC(0x01);
    this.writeD(this.objectId);
    this.writeD(this.originX);
    this.writeD(this.originY);
    this.writeD(this.originZ);
    this.writeC(this.shiftPressed ? 1 : 0);
  }
}
