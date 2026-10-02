import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x93_RequestChangePetName extends GameServerPacket {
  constructor(
    private readonly name: string
  ) {
    super();
  }

  write(): void {
    this.writeC(0x93);
    this.writeS(this.name);
  }
}

