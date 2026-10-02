import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x26_RequestJoinPledge extends GameServerPacket {
  constructor(
    private readonly targetId: number,
    private readonly pledgeType: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0x26);
    this.writeD(this.targetId);
    this.writeD(this.pledgeType);
  }
}

