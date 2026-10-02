import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x97_RequestSetPrivateStoreMsgSell extends GameServerPacket {
  constructor(
    private readonly storeMsg: string
  ) {
    super();
  }

  write(): void {
    this.writeC(0x97);
    this.writeS(this.storeMsg);
  }
}

