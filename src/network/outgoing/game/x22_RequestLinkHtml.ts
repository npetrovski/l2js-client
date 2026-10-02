import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x22_RequestLinkHtml extends GameServerPacket {
  constructor(
    private readonly link: string
  ) {
    super();
  }

  write(): void {
    this.writeC(0x22);
    this.writeS(this.link);
  }
}

