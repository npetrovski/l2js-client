export default class L2CharTemplate {
  // BaseStats
  private _baseSTR!: number;
  private _baseCON!: number;
  private _baseDEX!: number;
  private _baseINT!: number;
  private _baseWIT!: number;
  private _baseMEN!: number;
  private _baseHpMax!: number;
  private _baseCpMax!: number;
  private _baseMpMax!: number;
  private _baseHpReg!: number;
  private _baseMpReg!: number;
  private _basePAtk!: number;
  private _baseMAtk!: number;
  private _basePDef!: number;
  private _baseMDef!: number;
  private _basePAtkSpd!: number;
  private _baseMAtkSpd!: number;
  private _baseAttackRange!: number;
  private _randomDamage!: number;
  private _baseAttackType!: number;
  private _baseShldDef!: number;
  private _baseShldRate!: number;
  private _baseCritRate!: number;
  private _baseMCritRate!: number;
  // SpecialStats
  private _baseBreath!: number;
  private _baseFire!: number;
  private _baseWind!: number;
  private _baseWater!: number;
  private _baseEarth!: number;
  private _baseHoly!: number;
  private _baseDark!: number;
  private _baseFireRes!: number;
  private _baseWindRes!: number;
  private _baseWaterRes!: number;
  private _baseEarthRes!: number;
  private _baseHolyRes!: number;
  private _baseDarkRes!: number;
  private _baseElementRes!: number;
  /** For client info use {@link #_fCollisionRadius} */
  private _collisionRadius!: number;
  /** For client info use {@link #_fCollisionHeight} */
  private _collisionHeight!: number;

  private _fCollisionRadius!: number;
  private _fCollisionHeight!: number;

  public getBaseSTR(): number {
    return this._baseSTR;
  }

  public getBaseCON(): number {
    return this._baseCON;
  }

  public getBaseDEX(): number {
    return this._baseDEX;
  }

  public getBaseINT(): number {
    return this._baseINT;
  }

  public getBaseWIT(): number {
    return this._baseWIT;
  }

  public getBaseMEN(): number {
    return this._baseMEN;
  }

  public getBaseHpMax(): number {
    return this._baseHpMax;
  }

  public getBaseCpMax(): number {
    return this._baseCpMax;
  }

  public getBaseMpMax(): number {
    return this._baseMpMax;
  }

  public getBaseHpReg(): number {
    return this._baseHpReg;
  }

  public getBaseMpReg(): number {
    return this._baseMpReg;
  }

  public getBasePAtk(): number {
    return this._basePAtk;
  }

  public getBaseMAtk(): number {
    return this._baseMAtk;
  }

  public getBasePDef(): number {
    return this._basePDef;
  }

  public getBaseMDef(): number {
    return this._baseMDef;
  }

  public getBasePAtkSpd(): number {
    return this._basePAtkSpd;
  }

  public getBaseMAtkSpd(): number {
    return this._baseMAtkSpd;
  }

  public getBaseAttackRange(): number {
    return this._baseAttackRange;
  }

  public getRandomDamage(): number {
    return this._randomDamage;
  }

  public getBaseAttackType(): number {
    return this._baseAttackType;
  }

  public getBaseShldDef(): number {
    return this._baseShldDef;
  }

  public getBaseShldRate(): number {
    return this._baseShldRate;
  }

  public getBaseCritRate(): number {
    return this._baseCritRate;
  }

  public getBaseMCritRate(): number {
    return this._baseMCritRate;
  }

  public getBaseBreath(): number {
    return this._baseBreath;
  }

  public getBaseFire(): number {
    return this._baseFire;
  }

  public getBaseWind(): number {
    return this._baseWind;
  }

  public getBaseWater(): number {
    return this._baseWater;
  }

  public getBaseEarth(): number {
    return this._baseEarth;
  }

  public getBaseHoly(): number {
    return this._baseHoly;
  }

  public getBaseDark(): number {
    return this._baseDark;
  }

  public getBaseFireRes(): number {
    return this._baseFireRes;
  }

  public getBaseWindRes(): number {
    return this._baseWindRes;
  }

  public getBaseWaterRes(): number {
    return this._baseWaterRes;
  }

  public getBaseEarthRes(): number {
    return this._baseEarthRes;
  }

  public getBaseHolyRes(): number {
    return this._baseHolyRes;
  }

  public getBaseDarkRes(): number {
    return this._baseDarkRes;
  }

  public getBaseElementRes(): number {
    return this._baseElementRes;
  }

  public getCollisionRadius(): number {
    return this._collisionRadius;
  }

  public getCollisionHeight(): number {
    return this._collisionHeight;
  }

  public getFCollisionRadius(): number {
    return this._fCollisionRadius;
  }

  public getFCollisionHeight(): number {
    return this._fCollisionHeight;
  }

  public setBaseSTR(value: number) {
    this._baseSTR = value;
  }

  public setBaseCON(value: number) {
    this._baseCON = value;
  }

  public setBaseDEX(value: number) {
    this._baseDEX = value;
  }

  public setBaseINT(value: number) {
    this._baseINT = value;
  }

  public setBaseWIT(value: number) {
    this._baseWIT = value;
  }

  public setBaseMEN(value: number) {
    this._baseMEN = value;
  }

  public setBaseHpMax(value: number) {
    this._baseHpMax = value;
  }

  public setBaseCpMax(value: number) {
    this._baseCpMax = value;
  }

  public setBaseMpMax(value: number) {
    this._baseMpMax = value;
  }

  public setBaseHpReg(value: number) {
    this._baseHpReg = value;
  }

  public setBaseMpReg(value: number) {
    this._baseMpReg = value;
  }

  public setBasePAtk(value: number) {
    this._basePAtk = value;
  }

  public setBaseMAtk(value: number) {
    this._baseMAtk = value;
  }

  public setBasePDef(value: number) {
    this._basePDef = value;
  }

  public setBaseMDef(value: number) {
    this._baseMDef = value;
  }

  public setBasePAtkSpd(value: number) {
    this._basePAtkSpd = value;
  }

  public setBaseMAtkSpd(value: number) {
    this._baseMAtkSpd = value;
  }

  public setBaseAttackRange(value: number) {
    this._baseAttackRange = value;
  }

  public setRandomDamage(value: number) {
    this._randomDamage = value;
  }

  public setBaseAttackType(value: number) {
    this._baseAttackType = value;
  }

  public setBaseShldDef(value: number) {
    this._baseShldDef = value;
  }

  public setBaseShldRate(value: number) {
    this._baseShldRate = value;
  }

  public setBaseCritRate(value: number) {
    this._baseCritRate = value;
  }

  public setBaseMCritRate(value: number) {
    this._baseMCritRate = value;
  }

  public setBaseBreath(value: number) {
    this._baseBreath = value;
  }

  public setBaseFire(value: number) {
    this._baseFire = value;
  }

  public setBaseWind(value: number) {
    this._baseWind = value;
  }

  public setBaseWater(value: number) {
    this._baseWater = value;
  }

  public setBaseEarth(value: number) {
    this._baseEarth = value;
  }

  public setBaseHoly(value: number) {
    this._baseHoly = value;
  }

  public setBaseDark(value: number) {
    this._baseDark = value;
  }

  public setBaseFireRes(value: number) {
    this._baseFireRes = value;
  }

  public setBaseWindRes(value: number) {
    this._baseWindRes = value;
  }

  public setBaseWaterRes(value: number) {
    this._baseWaterRes = value;
  }

  public setBaseEarthRes(value: number) {
    this._baseEarthRes = value;
  }

  public setBaseHolyRes(value: number) {
    this._baseHolyRes = value;
  }

  public setBaseDarkRes(value: number) {
    this._baseDarkRes = value;
  }

  public setBaseElementRes(value: number) {
    this._baseElementRes = value;
  }

  public setCollisionRadius(value: number) {
    this._collisionRadius = value;
  }

  public setCollisionHeight(value: number) {
    this._collisionHeight = value;
  }

  public setFCollisionRadius(value: number) {
    this._fCollisionRadius = value;
  }

  public setFCollisionHeight(value: number) {
    this._fCollisionHeight = value;
  }
}
