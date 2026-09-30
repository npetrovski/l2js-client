import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x1C_AnswerTradeDone extends GameServerPacket {
  constructor(private _answer: number) {
    super();
  }

  write(): void {
    this.writeC(0x1c);
    this.writeD(this._answer);
  }
}
