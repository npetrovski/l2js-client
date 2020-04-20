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

  public get AtkSpdMultiplier(): number {
    return this._atkSpdMultiplier;
  }

  public set AtkSpdMultiplier(value: number) {
    this._atkSpdMultiplier = value;
  }

  public get STR(): number {
    return this._STR;
  }

  public get DEX(): number {
    return this._DEX;
  }

  public get CON(): number {
    return this._CON;
  }

  public get INT(): number {
    return this._INT;
  }

  public get WIT(): number {
    return this._WIT;
  }

  public get MEN(): number {
    return this._MEN;
  }

  public get PAtk(): number {
    return this._pAtk;
  }

  public get PAtkSpd(): number {
    return this._pAtkSpd;
  }

  public get PDef(): number {
    return this._pDef;
  }

  public get EvasionRate(): number {
    return this._evasionRate;
  }

  public get Accuracy(): number {
    return this._accuracy;
  }

  public get Crit(): number {
    return this._crit;
  }

  public get MAtk(): number {
    return this._mAtk;
  }

  public get MAtkSpd(): number {
    return this._mAtkSpd;
  }

  public get MDef(): number {
    return this._mDef;
  }

  public get PvpKills(): number {
    return this._pvpKills;
  }

  public get PkKills(): number {
    return this._pkKills;
  }

  public get Karma(): number {
    return this._karma;
  }

  public get AtkElementPower(): number {
    return this._atkElementPower;
  }

  public get DefFire(): number {
    return this._defFire;
  }

  public get DefWater(): number {
    return this._defWater;
  }

  public get DefWind(): number {
    return this._defWind;
  }

  public get DefEarth(): number {
    return this._defEarth;
  }

  public get DefHoly(): number {
    return this._defHoly;
  }

  public get DefUnholy(): number {
    return this._defUnholy;
  }

  public get RecommLeft(): number {
    return this._recommLeft;
  }

  public get RecommHave(): number {
    return this._recommHave;
  }

  public get Fame(): number {
    return this._fame;
  }

  public get Vitality(): number {
    return this._vitality;
  }

  public get IsSitting(): boolean {
    return this._isSitting;
  }

  public get Exp(): number {
    return this._exp;
  }

  public get ExpPercent(): number {
    return this._expPercent;
  }

  public get Sp(): number {
    return this._sp;
  }

  public get Load(): number {
    return this._load;
  }

  public get MaxLoad(): number {
    return this._maxLoad;
  }

  public set STR(value: number) {
    this._STR = value;
  }

  public set DEX(value: number) {
    this._DEX = value;
  }

  public set CON(value: number) {
    this._CON = value;
  }

  public set INT(value: number) {
    this._INT = value;
  }

  public set WIT(value: number) {
    this._WIT = value;
  }

  public set MEN(value: number) {
    this._MEN = value;
  }

  public set PAtk(value: number) {
    this._pAtk = value;
  }

  public set PAtkSpd(value: number) {
    this._pAtkSpd = value;
  }

  public set PDef(value: number) {
    this._pDef = value;
  }

  public set EvasionRate(value: number) {
    this._evasionRate = value;
  }

  public set Accuracy(value: number) {
    this._accuracy = value;
  }

  public set Crit(value: number) {
    this._crit = value;
  }

  public set MAtk(value: number) {
    this._mAtk = value;
  }

  public set MAtkSpd(value: number) {
    this._mAtkSpd = value;
  }

  public set MDef(value: number) {
    this._mDef = value;
  }

  public set PvpKills(value: number) {
    this._pvpKills = value;
  }

  public set PkKills(value: number) {
    this._pkKills = value;
  }

  public set Karma(value: number) {
    this._karma = value;
  }

  public set AtkElementPower(value: number) {
    this._atkElementPower = value;
  }

  public set DefFire(value: number) {
    this._defFire = value;
  }

  public set DefWater(value: number) {
    this._defWater = value;
  }

  public set DefWind(value: number) {
    this._defWind = value;
  }

  public set DefEarth(value: number) {
    this._defEarth = value;
  }

  public set DefHoly(value: number) {
    this._defHoly = value;
  }

  public set DefUnholy(value: number) {
    this._defUnholy = value;
  }

  public set RecommLeft(value: number) {
    this._recommLeft = value;
  }

  public set RecommHave(value: number) {
    this._recommHave = value;
  }

  public set Fame(value: number) {
    this._fame = value;
  }

  public set Vitality(value: number) {
    this._vitality = value;
  }

  public set IsSitting(value: boolean) {
    this._isSitting = value;
  }

  public set Exp(value: number) {
    this._exp = value;
  }

  public set ExpPercent(value: number) {
    this._expPercent = value;
  }

  public set Sp(value: number) {
    this._sp = value;
  }

  public set Load(value: number) {
    this._load = value;
  }

  public set MaxLoad(value: number) {
    this._maxLoad = value;
  }
}
