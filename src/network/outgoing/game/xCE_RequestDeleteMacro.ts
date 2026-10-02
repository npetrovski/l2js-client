import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xCE_RequestDeleteMacro extends GameServerPacket {
  constructor(
    private readonly id: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xCE);
    this.writeD(this.id);
  }
}

