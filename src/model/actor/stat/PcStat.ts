import PlayableStat from "./PlayableStat";

export default class PcStat extends PlayableStat {
  private _vitalityPoints: number = 0;

  private _vitalityLevel: number = 0;

  private _cloakSlot: boolean = false;

  public getVitalityPoints(): number {
    return this._vitalityPoints;
  }

  public getVitalityLevel(): number {
    return this._vitalityLevel;
  }

  public getCloakSlot(): boolean {
    return this._cloakSlot;
  }

  public setVitalityPoints(value: number) {
    this._vitalityPoints = value;
  }

  public setVitalityLevel(value: number) {
    this._vitalityLevel = value;
  }

  public setCloakSlot(value: boolean) {
    this._cloakSlot = value;
  }
}
