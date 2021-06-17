import L2Character from "./L2Character";

export default class L2User extends L2Character {
  private _STR!: number;
  private _DEX!: number;
  private _CON!: number;
  private _INT!: number;
  private _WIT!: number;
  private _MEN!: number;
  private _pAtk!: number;
  private _pAtkSpd!: number;
  private _atkSpdMultiplier!: number;
  private _pDef!: number;
  private _evasionRate!: number;
  private _accuracy!: number;
  private _crit!: number;
  private _mAtk!: number;
  private _mAtkSpd!: number;
  private _mDef!: number;
  private _pvpKills!: number;
  private _pkKills!: number;
  private _karma!: number;
  private _atkElementPower!: number;
  private _defFire!: number;
  private _defWater!: number;
  private _defWind!: number;
  private _defEarth!: number;
  private _defHoly!: number;
  private _defUnholy!: number;
  private _recommLeft!: number;
  private _recommHave!: number;
  private _fame!: number;

  private _vitality!: number;
  private _isSitting!: boolean;

  private _exp!: number;
  private _expPercent!: number;
  private _sp!: number;

  private _load!: number;
  private _maxLoad!: number;

  private _gauge = 0;
  private _gaugeInterval!: ReturnType<typeof setInterval>;

  public get AtkSpdMultiplier(): number {
    return this._atkSpdMultiplier;
  }

  public set AtkSpdMultiplier(value: number) {
    this._atkSpdMultiplier = value;
  }

  public get STR(): number {
    return this._STR;
  }

  public set STR(value: number) {
    this._STR = value;
  }

  public get DEX(): number {
    return this._DEX;
  }

  public set DEX(value: number) {
    this._DEX = value;
  }

  public get CON(): number {
    return this._CON;
  }

  public set CON(value: number) {
    this._CON = value;
  }

  public get INT(): number {
    return this._INT;
  }

  public set INT(value: number) {
    this._INT = value;
  }

  public get WIT(): number {
    return this._WIT;
  }

  public set WIT(value: number) {
    this._WIT = value;
  }
  public get MEN(): number {
    return this._MEN;
  }

  public set MEN(value: number) {
    this._MEN = value;
  }

  public get PAtk(): number {
    return this._pAtk;
  }

  public set PAtk(value: number) {
    this._pAtk = value;
  }

  public get PAtkSpd(): number {
    return this._pAtkSpd;
  }

  public set PAtkSpd(value: number) {
    this._pAtkSpd = value;
  }
  public get PDef(): number {
    return this._pDef;
  }

  public set PDef(value: number) {
    this._pDef = value;
  }
  public get EvasionRate(): number {
    return this._evasionRate;
  }

  public set EvasionRate(value: number) {
    this._evasionRate = value;
  }
  public get Accuracy(): number {
    return this._accuracy;
  }

  public set Accuracy(value: number) {
    this._accuracy = value;
  }

  public get Crit(): number {
    return this._crit;
  }

  public set Crit(value: number) {
    this._crit = value;
  }
  public get MAtk(): number {
    return this._mAtk;
  }

  public set MAtk(value: number) {
    this._mAtk = value;
  }

  public get MAtkSpd(): number {
    return this._mAtkSpd;
  }

  public set MAtkSpd(value: number) {
    this._mAtkSpd = value;
  }
  public get MDef(): number {
    return this._mDef;
  }

  public set MDef(value: number) {
    this._mDef = value;
  }
  public get PvpKills(): number {
    return this._pvpKills;
  }

  public set PvpKills(value: number) {
    this._pvpKills = value;
  }
  public get PkKills(): number {
    return this._pkKills;
  }

  public set PkKills(value: number) {
    this._pkKills = value;
  }
  public get Karma(): number {
    return this._karma;
  }

  public set Karma(value: number) {
    this._karma = value;
  }
  public get AtkElementPower(): number {
    return this._atkElementPower;
  }

  public set AtkElementPower(value: number) {
    this._atkElementPower = value;
  }

  public get DefFire(): number {
    return this._defFire;
  }

  public set DefFire(value: number) {
    this._defFire = value;
  }
  public get DefWater(): number {
    return this._defWater;
  }

  public set DefWater(value: number) {
    this._defWater = value;
  }
  public get DefWind(): number {
    return this._defWind;
  }

  public set DefWind(value: number) {
    this._defWind = value;
  }

  public get DefEarth(): number {
    return this._defEarth;
  }

  public set DefEarth(value: number) {
    this._defEarth = value;
  }

  public get DefHoly(): number {
    return this._defHoly;
  }

  public set DefHoly(value: number) {
    this._defHoly = value;
  }
  public get DefUnholy(): number {
    return this._defUnholy;
  }

  public set DefUnholy(value: number) {
    this._defUnholy = value;
  }

  public get RecommLeft(): number {
    return this._recommLeft;
  }

  public set RecommLeft(value: number) {
    this._recommLeft = value;
  }
  public get RecommHave(): number {
    return this._recommHave;
  }

  public set RecommHave(value: number) {
    this._recommHave = value;
  }
  public get Fame(): number {
    return this._fame;
  }

  public set Fame(value: number) {
    this._fame = value;
  }

  public get Vitality(): number {
    return this._vitality;
  }

  public set Vitality(value: number) {
    this._vitality = value;
  }

  public get IsSitting(): boolean {
    return this._isSitting;
  }

  public set IsSitting(value: boolean) {
    this._isSitting = value;
  }

  public get Exp(): number {
    return this._exp;
  }

  public set Exp(value: number) {
    this._exp = value;
  }
  public get ExpPercent(): number {
    return this._expPercent;
  }

  public set ExpPercent(value: number) {
    this._expPercent = value;
  }

  public get Sp(): number {
    return this._sp;
  }

  public set Sp(value: number) {
    this._sp = value;
  }

  public get Load(): number {
    return this._load;
  }

  public set Load(value: number) {
    this._load = value;
  }

  public get MaxLoad(): number {
    return this._maxLoad;
  }

  public set MaxLoad(value: number) {
    this._maxLoad = value;
  }

  public get Gauge(): number {
    return this._gauge;
  }

  public set Gauge(value: number) {
    this._gauge = value;
    if (value > 0) {
      this.IsReady = false;

      this._gaugeInterval = setInterval(() => {
        this._gauge -= 100;
        if (this._gauge <= 0) {
          clearInterval(this._gaugeInterval);
          this.IsReady = true;
        }
      }, 100);
    } else {
      this.IsReady = true;
    }
  }
}
