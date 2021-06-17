import L2Creature from "./L2Creature";

export default class L2PartyPet extends L2Creature {
  private _masterObjectId!: number;

  private _currentFed!: number;

  private _maxFed!: number;

  private _summonType!: number;

  private _displayName = "";

  public get DisplayName(): string {
    return this._displayName;
  }

  public set DisplayName(value: string) {
    this._displayName = value;
  }

  public get MasterObjectId(): number {
    return this._masterObjectId;
  }

  public set MasterObjectId(value: number) {
    this._masterObjectId = value;
  }

  public get CurrentFed(): number {
    return this._currentFed;
  }

  public set CurrentFed(value: number) {
    this._currentFed = value;
  }

  public get MaxFed(): number {
    return this._maxFed;
  }

  public set MaxFed(value: number) {
    this._maxFed = value;
  }

  public get SummonType(): number {
    return this._summonType;
  }

  public set SummonType(value: number) {
    this._summonType = value;
  }
}
