import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x85_RequestTutorialLinkHtml extends GameServerPacket {
  constructor(
    private readonly bypass: string
  ) {
    super();
  }

  write(): void {
    this.writeC(0x85);
    this.writeS(this.bypass);
  }
}

