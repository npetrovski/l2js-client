import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x6A_RequestPostAttachment extends GameServerPacket {
  constructor(
    private readonly msgId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x6A);
    this.writeD(this.msgId);
  }
}

