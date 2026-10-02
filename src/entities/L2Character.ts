import L2Creature from "@entities/L2Creature";
import L2Clan from "@entities/L2Clan";
import { PrivateStoreType } from "@enums/PrivateStoreType";

export default class L2Character extends L2Creature {
  private _isPartyMember!: boolean;
  private _cp!: number;
  private _maxCp!: number;
  private _level!: number;
  private _clan: L2Clan | null = null;
  private _privateStoreType = PrivateStoreType.None;

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
  public get Clan(): L2Clan | null {
    return this._clan;
  }
  public set Clan(value: L2Clan | null) {
    this._clan = value;
  }
  public get PrivateStoreType(): PrivateStoreType {
    return this._privateStoreType;
  }
  public set PrivateStoreType(value: PrivateStoreType) {
    this._privateStoreType = value;
  }
}
