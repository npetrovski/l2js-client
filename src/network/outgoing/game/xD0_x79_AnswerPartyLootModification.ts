import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x79_AnswerPartyLootModification extends GameServerPacket {
  constructor(private _answer: number) {
    super();
  }

  write(): void {
    this.writeC(0xd0);
    this.writeH(0x79);
    this.writeD(this._answer);
  }
}
