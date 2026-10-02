import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xB1_NetPing extends GameServerPacket {
  constructor(private readonly timestamp = Math.floor(Date.now() / 1000), private readonly ping = 235) {
    super();
  }

  write(): void {
    this.writeC(0xb1);
    this.writeD(this.timestamp);
    this.writeD(this.ping);
    this.writeD(6144);
  }
}
