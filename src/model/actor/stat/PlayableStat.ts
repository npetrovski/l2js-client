import CharStat from "./CharStat";

export default class PlayableStat extends CharStat {
  private _exp!: number;

  private _sp!: number;

  public getExp(): number {
    return this._exp;
  }

  public getSp(): number {
    return this._sp;
  }

  public setExp(value: number) {
    this._exp = value;
  }

  public setSp(value: number) {
    this._sp = value;
  }
}
