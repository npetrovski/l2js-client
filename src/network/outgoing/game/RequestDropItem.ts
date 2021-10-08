import GameServerPacket from "./GameServerPacket";

export default class RequestDropItem extends GameServerPacket {
  constructor(
    public objectId: number,
    public count: number,
    public x: number,
    public y: number,
    public z: number
  ) {
    super();
  }
  write(): void {
    this.writeC(0x17);
    this.writeD(this.objectId);
    this.writeQ(this.count);
    this.writeD(this.x);
    this.writeD(this.y);
    this.writeD(this.z);
  }
}
