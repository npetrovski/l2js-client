import GameServerPacket from "./GameServerPacket";

export default class xD0_x6E_RequestSentPost extends GameServerPacket {
  constructor(private _msgId: number) {
    super();
  }

  write(): void {
    this.writeC(0xd0);
    this.writeH(0x6e);
    this.writeD(this._msgId);
  }
}
