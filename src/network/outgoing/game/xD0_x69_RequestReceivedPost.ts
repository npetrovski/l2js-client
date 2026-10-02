import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x69_RequestReceivedPost extends GameServerPacket {
  constructor(
    private readonly msgId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x69);
    this.writeD(this.msgId);
  }
}

