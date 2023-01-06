import L2Character from "./L2Character";
import { MountType } from '../enums/MountType'
import { PrivateStoreType } from '../enums/PrivateStoreType'
import { ClanPrivilege } from '../enums/ClanPriviledge'
import { MovementType } from '../enums/MovementType'

export default class L2User extends L2Character {
  private _pDef!: number;
  private _evasionRate!: number;
  private _accuracy!: number;
  private _crit!: number;
  private _mDef!: number;
  private _pvpKills!: number;
  private _pkKills!: number;
  private _atkElementPower!: number;
  private _defFire!: number;
  private _defWater!: number;
  private _defWind!: number;
  private _defEarth!: number;
  private _defHoly!: number;
  private _defUnholy!: number;
  private _recommLeft!: number;
  private _fame!: number;
  private _vitality!: number;
  private _exp!: number;
  private _expPercent!: number;
  private _sp!: number;
  private _load!: number;
  private _maxLoad!: number;
  private _gauge = 0;
  private _gaugeInterval!: ReturnType<typeof setInterval>;
  private _gm!: boolean;
  private _clanId!: number;
  private _mountType!: MountType;
  private _vitalityPoints!: number;
  private _canCrystalizeItems!: boolean;
  private _privateStoreType!: PrivateStoreType;
  private _clanPrivileges!: ClanPrivilege;
  private _movementType!: MovementType;

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

  public get IsGM() : boolean {
    return this._gm;
  }

  public set IsGM(value: boolean) {
    this._gm = value;
  }
  public get ClanId(): number {
    return this._clanId;
  }

  public set ClanId( value: number ) {
    this._clanId = value;
  }

  public get MountType(): MountType {
    return this._mountType;
  }

  public set MountType( value: MountType ) {
    this._mountType = value;
  }

  public get VitalityPoints(): number {
    return this._vitalityPoints;
  }

  public set VitalityPoints( value: number ) {
    this._vitalityPoints = value;
  }

  public get CanCrystalizeItems(): boolean {
    return this._canCrystalizeItems;
  }

  public set CanCrystalizeItems( value: boolean ) {
    this._canCrystalizeItems = value;
  }

  public get PrivateStoreType(): PrivateStoreType {
    return this._privateStoreType;
  }

  public set PrivateStoreType( value: PrivateStoreType ) {
    this._privateStoreType = value;
  }

  public get ClanPrivileges(): ClanPrivilege {
    return this._clanPrivileges;
  }

  public set ClanPrivileges( value: ClanPrivilege ) {
    this._clanPrivileges = value;
  }

  public get MovementType(): MovementType {
    return this._movementType;
  }

  public set MovementType( value: MovementType ) {
    this._movementType = value;
  }
}
