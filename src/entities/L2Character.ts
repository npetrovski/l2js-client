import L2Creature from "./L2Creature";

export default class L2Character extends L2Creature {
  private _isPartyMember!: boolean;

  public get IsPartyMember(): boolean {
    return this._isPartyMember;
  }

  public set IsPartyMember(value: boolean) {
    this._isPartyMember = value;
  }
}
