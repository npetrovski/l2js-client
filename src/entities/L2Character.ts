import L2Creature from "./L2Creature";

export default class L2Character extends L2Creature {
  private _isPartyMember!: boolean;
  private _cp!: number;
  private _maxCp!: number;
  private _level!: number;

  public get Cp(): number {
    return this._cp;
  }

  public set Cp(value: number) {
    this._cp = value;
  }

  public get MaxCp(): number {
    return this._maxCp;
  }

  public set MaxCp(value: number) {
    this._maxCp = value;
  }
  public get IsPartyMember(): boolean {
    return this._isPartyMember;
  }
  public set IsPartyMember(value: boolean) {
    this._isPartyMember = value;
  }
  public get Level(): number {
    return this._level;
  }
  public set Level(value: number) {
    this._level = value;
  }
}
