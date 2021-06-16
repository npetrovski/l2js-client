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

  public set IsDebuff(value: boolean) {
    this._isDebuff = value;
  }

  public get SkillLevel(): number {
    return this._skillLevel;
  }

  public set SkillLevel(value: number) {
    this._skillLevel = value;
  }

  public get RemainingTime(): number {
    return this._remainingTime;
  }

  public set RemainingTime(value: number) {
    this._remainingTime = value;
  }

  public get Description(): string {
    return this._description;
  }

  public set Description(value: string) {
    this._description = value;
  }

  public autoCountDown(callback?: () => void): void {
    const interval = setInterval(() => {
      this.RemainingTime = this.RemainingTime - 1;
      if (this.RemainingTime <= 0) {
        this.RemainingTime = 0;
        clearInterval(interval);
        if (callback) {
          callback();
        }
      }
    }, 1000);
  }
}
