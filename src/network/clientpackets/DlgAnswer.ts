import GameServerPacket from "./GameServerPacket";

export default class DlgAnswer extends GameServerPacket {
  constructor(private _messageId: number, private _answer: number, private _requesterId: number) {
    super();
  }

  write(): void {
    this.writeC(0xc6);
    this.writeD(this._messageId);

    this.writeD(this._answer);
    this.writeD(this._requesterId);
  }
}
