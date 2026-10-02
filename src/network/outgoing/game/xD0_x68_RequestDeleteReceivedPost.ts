import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x68_RequestDeleteReceivedPost extends GameServerPacket {
  constructor(private readonly messageIds: readonly number[]) {
    super();
  }

  write(): void {
    this.writeC(0xd0);
    this.writeH(0x68);
    this.writeD(this.messageIds.length);
    for (const messageId of this.messageIds) {
      this.writeD(messageId);
    }
  }
}
