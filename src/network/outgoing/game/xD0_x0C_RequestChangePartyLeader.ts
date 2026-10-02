import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x0C_RequestChangePartyLeader extends GameServerPacket {
  constructor(
    private readonly name: string
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x0C);
    this.writeS(this.name);
  }
}

