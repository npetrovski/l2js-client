import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x74_ReqBypassBuildCmd extends GameServerPacket {
  constructor(
    private readonly command: string
  ) {
    super();
  }

  write(): void {
    this.writeC(0x74);
    this.writeS(this.command);
  }
}

