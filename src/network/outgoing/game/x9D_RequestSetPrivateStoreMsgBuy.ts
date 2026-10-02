import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x9D_RequestSetPrivateStoreMsgBuy extends GameServerPacket {
  constructor(
    private readonly storeMsg: string
  ) {
    super();
  }

  write(): void {
    this.writeC(0x9D);
    this.writeS(this.storeMsg);
  }
}

