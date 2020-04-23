import GameServerPacket from "./GameServerPacket";

export default class RequestDuelStart extends GameServerPacket {
  private _charName: string;

  private _partyDuel: number;
  constructor(charName: string, partyDuel: boolean) {
    super();
    this._charName = charName;
    this._partyDuel = partyDuel ? 1 : 0;
  }

  write(): void {
    this.writeC(0xd0);
    this.writeH(0x1b);
    this.writeS(this._charName);
    this.writeD(this._partyDuel);
  }
}
