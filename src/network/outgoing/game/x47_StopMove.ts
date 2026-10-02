import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x47_StopMove extends GameServerPacket {
  constructor(private readonly x: number, private readonly y: number, private readonly z: number) {
    super();
  }

  write(): void {
    this.writeC(0x47);
    this.writeD(this.x);
    this.writeD(this.y);
    this.writeD(this.z);
    this.writeD(0);
  }
}
