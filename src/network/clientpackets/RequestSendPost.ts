import L2Item from "../../entities/L2Item";
import GameServerPacket from "./GameServerPacket";

export default class RequestSendPost extends GameServerPacket {
  constructor(
    private _receiver: string,
    private _subject: string,
    private _text: string,
    private _items: L2Item[],
    private _reqAdena: number = 0
  ) {
    super();
  }
  write(): void {
    this.writeC(0xd0);
    this.writeH(0x66);

    this.writeS(this._receiver);
    this.writeD(0);
    this.writeS(this._subject);
    this.writeS(this._text);

    this.writeD(this._items.length);

    for (const item of this._items) {
      this.writeD(item.Id);
      this.writeQ(item.Count);
    }
    this.writeQ(this._reqAdena);
  }
}
