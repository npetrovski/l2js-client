import L2Object from "./L2Object";

export default class L2Buff extends L2Object {
  private _isDebuff!: boolean;

  private _skillLevel!: number;

  private _remainingTime!: number;

  private _description!: string;

  constructor(id?: number, level?: number) {
    super();
    if (id) {
      this.Id = id;
    }

    if (level) {
      this.SkillLevel = level;
    }
  }

  public get IsDebuff(): boolean {
    return this._isDebuff;
  }

  public get SkillLevel(): number {
    return this._skillLevel;
  }

  public get RemainingTime(): number {
    return this._remainingTime;
  }

  public get Description(): string {
    return this._description;
  }

  public set IsDebuff(value: boolean) {
    this._isDebuff = value;
  }

  public set SkillLevel(value: number) {
    this._skillLevel = value;
  }

  public set RemainingTime(value: number) {
    this._remainingTime = value;
  }

  public set Description(value: string) {
    this._description = value;
  }
}
