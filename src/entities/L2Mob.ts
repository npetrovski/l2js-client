import L2Creature from "./L2Creature";

export default class L2Mob extends L2Creature {
  private _isSpoiled!: boolean;

  public get IsSpoiled(): boolean {
    return this._isSpoiled;
  }

  public set IsSpoiled(value: boolean) {
    this._isSpoiled = value;
  }
}
