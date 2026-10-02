import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x07_RequestExAcceptJoinMPCC extends GameServerPacket {
  constructor(
    private readonly response: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x07);
    this.writeD(this.response);
  }
}

