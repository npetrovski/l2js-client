import L2Character from "../L2Character";

export default class CharStatus {
  static readonly REGEN_FLAG_CP = 4;
  static readonly REGEN_FLAG_MP = 2;
  static readonly REGEN_FLAG_HP = 1;

  private _activeChar!: L2Character;

  private _currentHp: number = 0;

  private _currentMp: number = 0;

  public getCurrentHp(): number {
    return this._currentHp;
  }

  public setCurrentHp(value: number) {
    this._currentHp = value;
  }

  public getCurrentMp(): number {
    return this._currentMp;
  }

  public setCurrentMp(value: number) {
    this._currentMp = value;
  }
}
