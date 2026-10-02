import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x45_RequestOustPartyMember extends GameServerPacket {
  constructor(
    private readonly name: string
  ) {
    super();
  }

  write(): void {
    this.writeC(0x45);
    this.writeS(this.name);
  }
}

