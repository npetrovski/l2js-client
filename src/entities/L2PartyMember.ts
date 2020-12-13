import L2Character from "./L2Character";

export default class L2PartyMember extends L2Character {
  private _isPartyLeader!: boolean;

  public get IsPartyLeader(): boolean {
    return this._isPartyLeader;
  }

  public set IsPartyLeader(value: boolean) {
    this._isPartyLeader = value;
  }
}
