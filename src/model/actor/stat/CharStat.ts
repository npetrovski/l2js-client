export default class CharStat {
  private _level: number = 1;
  private _accuracy: number = 0;
  private _attackSpeedMultiplier: number = 0.0;
  private _criticalDamage: number = 0.0;
  private _criticalHit: number = 0;
  private _criticalHitPos: number = 0;
  private _evasionRate: number = 0;
  private _magicalAttackRange: number = 0;
  private _maxCp: number = 0;
  private _maxRecoverableCp: number = 0;
  private _maxHp: number = 0;
  private _maxRecoverableHp: number = 0;
  private _maxMp: number = 0;
  private _maxRecoverableMp: number = 0;
  private _mAtk: number = 0;
  private _mAtkSpd: number = 0;
  private _mCriticalHit: number = 0;
  private _mDef: number = 0;
  private _movementSpeedMultiplier: number = 0;
  private _runSpeed: number = 0;
  private _walkSpeed: number = 0;
  private _swimRunSpeed: number = 0;
  private _swimWalkSpeed: number = 0;
  private _baseMoveSpeed: number = 0;
  private _moveSpeed: number = 0;
  private _mReuseRate: number = 0;
  private _pAtk: number = 0;
  private _pAtkSpd: number = 0;
  private _pDef: number = 0;
  private _physicalAttackRange: number = 0;
  private _physicalAttackAngle: number = 0;
  private _weaponReuseModifier: number = 0;
  private _shldDef: number = 0;
  private _mpConsume1: number = 0;
  private _mpConsume2: number = 0;
  private _attackElement: number = 0; /** byte ref: Elementals */
  private _attackElementValue: number = 0;
  private _defenseElementValue: number = 0;

  private _CON: number = 0;
  private _DEX: number = 0;
  private _INT: number = 0;
  private _MEN: number = 0;
  private _STR: number = 0;
  private _WIT: number = 0;

  public getLevel(): number {
    return this._level;
  }

  public getAccuracy(): number {
    return this._accuracy;
  }

  public getAttackSpeedMultiplier(): number {
    return this._attackSpeedMultiplier;
  }

  public getCriticalDamage(): number {
    return this._criticalDamage;
  }

  public getCriticalHit(): number {
    return this._criticalHit;
  }

  public getCriticalHitPos(): number {
    return this._criticalHitPos;
  }

  public getEvasionRate(): number {
    return this._evasionRate;
  }

  public getMagicalAttackRange(): number {
    return this._magicalAttackRange;
  }

  public getMaxCp(): number {
    return this._maxCp;
  }

  public getMaxRecoverableCp(): number {
    return this._maxRecoverableCp;
  }

  public getMaxHp(): number {
    return this._maxHp;
  }

  public getMaxRecoverableHp(): number {
    return this._maxRecoverableHp;
  }

  public getMaxMp(): number {
    return this._maxMp;
  }

  public getMaxRecoverableMp(): number {
    return this._maxRecoverableMp;
  }

  public getMAtk(): number {
    return this._mAtk;
  }

  public getMAtkSpd(): number {
    return this._mAtkSpd;
  }

  public getMCriticalHit(): number {
    return this._mCriticalHit;
  }

  public getMDef(): number {
    return this._mDef;
  }

  public getMovementSpeedMultiplier(): number {
    return this._movementSpeedMultiplier;
  }

  public getRunSpeed(): number {
    return this._runSpeed;
  }

  public getWalkSpeed(): number {
    return this._walkSpeed;
  }

  public getSwimRunSpeed(): number {
    return this._swimRunSpeed;
  }

  public getSwimWalkSpeed(): number {
    return this._swimWalkSpeed;
  }

  public getBaseMoveSpeed(): number {
    return this._baseMoveSpeed;
  }

  public getMoveSpeed(): number {
    return this._moveSpeed;
  }

  public getMReuseRate(): number {
    return this._mReuseRate;
  }

  public getPAtk(): number {
    return this._pAtk;
  }

  public getPAtkSpd(): number {
    return this._pAtkSpd;
  }

  public getPDef(): number {
    return this._pDef;
  }

  public getPhysicalAttackRange(): number {
    return this._physicalAttackRange;
  }

  public getPhysicalAttackAngle(): number {
    return this._physicalAttackAngle;
  }

  public getWeaponReuseModifier(): number {
    return this._weaponReuseModifier;
  }

  public getShldDef(): number {
    return this._shldDef;
  }

  public getMpConsume1(): number {
    return this._mpConsume1;
  }

  public getMpConsume2(): number {
    return this._mpConsume2;
  }

  public getAttackElement(): number {
    return this._attackElement;
  }

  public getAttackElementValue(): number {
    return this._attackElementValue;
  }

  public getDefenseElementValue(): number {
    return this._defenseElementValue;
  }

  public getCON(): number {
    return this._CON;
  }

  public getDEX(): number {
    return this._DEX;
  }

  public getINT(): number {
    return this._INT;
  }

  public getMEN(): number {
    return this._MEN;
  }

  public getSTR(): number {
    return this._STR;
  }

  public getWIT(): number {
    return this._WIT;
  }

  public setLevel(value: number) {
    this._level = value;
  }

  public setAccuracy(value: number) {
    this._accuracy = value;
  }

  public setAttackSpeedMultiplier(value: number) {
    this._attackSpeedMultiplier = value;
  }

  public setCriticalDamage(value: number) {
    this._criticalDamage = value;
  }

  public setCriticalHit(value: number) {
    this._criticalHit = value;
  }

  public setCriticalHitPos(value: number) {
    this._criticalHitPos = value;
  }

  public setEvasionRate(value: number) {
    this._evasionRate = value;
  }

  public setMagicalAttackRange(value: number) {
    this._magicalAttackRange = value;
  }

  public setMaxCp(value: number) {
    this._maxCp = value;
  }

  public setMaxRecoverableCp(value: number) {
    this._maxRecoverableCp = value;
  }

  public setMaxHp(value: number) {
    this._maxHp = value;
  }

  public setMaxRecoverableHp(value: number) {
    this._maxRecoverableHp = value;
  }

  public setMaxMp(value: number) {
    this._maxMp = value;
  }

  public setMaxRecoverableMp(value: number) {
    this._maxRecoverableMp = value;
  }

  public setMAtk(value: number) {
    this._mAtk = value;
  }

  public setMAtkSpd(value: number) {
    this._mAtkSpd = value;
  }

  public setMCriticalHit(value: number) {
    this._mCriticalHit = value;
  }

  public setMDef(value: number) {
    this._mDef = value;
  }

  public setMovementSpeedMultiplier(value: number) {
    this._movementSpeedMultiplier = value;
  }

  public setRunSpeed(value: number) {
    this._runSpeed = value;
  }

  public setWalkSpeed(value: number) {
    this._walkSpeed = value;
  }

  public setSwimRunSpeed(value: number) {
    this._swimRunSpeed = value;
  }

  public setSwimWalkSpeed(value: number) {
    this._swimWalkSpeed = value;
  }

  public setBaseMoveSpeed(value: number) {
    this._baseMoveSpeed = value;
  }

  public setMoveSpeed(value: number) {
    this._moveSpeed = value;
  }

  public setMReuseRate(value: number) {
    this._mReuseRate = value;
  }

  public setPAtk(value: number) {
    this._pAtk = value;
  }

  public setPAtkSpd(value: number) {
    this._pAtkSpd = value;
  }

  public setPDef(value: number) {
    this._pDef = value;
  }

  public setPhysicalAttackRange(value: number) {
    this._physicalAttackRange = value;
  }

  public setPhysicalAttackAngle(value: number) {
    this._physicalAttackAngle = value;
  }

  public setWeaponReuseModifier(value: number) {
    this._weaponReuseModifier = value;
  }

  public setShldDef(value: number) {
    this._shldDef = value;
  }

  public setMpConsume1(value: number) {
    this._mpConsume1 = value;
  }

  public setMpConsume2(value: number) {
    this._mpConsume2 = value;
  }

  public setAttackElement(value: number) {
    this._attackElement = value;
  }

  public setAttackElementValue(value: number) {
    this._attackElementValue = value;
  }

  public setDefenseElementValue(value: number) {
    this._defenseElementValue = value;
  }

  public setCON(value: number) {
    this._CON = value;
  }

  public setDEX(value: number) {
    this._DEX = value;
  }

  public setINT(value: number) {
    this._INT = value;
  }

  public setMEN(value: number) {
    this._MEN = value;
  }

  public setSTR(value: number) {
    this._STR = value;
  }

  public setWIT(value: number) {
    this._WIT = value;
  }
}
