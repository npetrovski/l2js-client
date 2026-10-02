import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x86_RequestTutorialPassCmdToServer extends GameServerPacket {
  constructor(
    private readonly pass: string
  ) {
    super();
  }

  write(): void {
    this.writeC(0x86);
    this.writeS(this.pass);
  }
}

