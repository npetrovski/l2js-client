import GameServerPacket from "./GameServerPacket";

export default class MoveBackwardToLocation extends GameServerPacket {
  constructor(
    public targetX: number,
    public targetY: number,
    public targetZ: number,
    public originX: number,
    public originY: number,
    public originZ: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0x01);
    this.writeD(this.targetX);
    this.writeD(this.targetY);
    this.writeD(this.targetZ);
    this.writeD(this.originX);
    this.writeD(this.originY);
    this.writeD(this.originZ);
    this.writeD(1); // is 0 if cursor keys are used 1 if mouse is used
  }
}
