import L2Object from "./L2Object";
import { Sex } from "../enums/Sex";
import { Race } from "../enums/Race";
import Vector from "../mmocore/Vector";
import L2ObjectCollection from "./L2ObjectCollection";
import L2Buff from "./L2Buff";
import { Console } from "console";

export default abstract class L2Creature extends L2Object {
  private _hp!: number;
  private _mp!: number;
  private _maxHp!: number;
  private _maxMp!: number;
  private _isRunning!: boolean;
  private _isSitting!: boolean;
  private _isFishing!: boolean;

  private _hpPercent!: number;
  private _mpPercent!: number;

  private _dx!: number;
  private _dy!: number;
  private _dz!: number;
  private _pAtk!: number;
  private _pAtkSpd!: number;
  private _mAtk!: number;
  private _mAtkSpd!: number;
  private _isDead = false;
  private _runSpeed!: number;
  private _walkSpeed!: number;
  private _speedMultiplier!: number;
  private _atkSpdMultiplier!: number;
  private _swimRunSpeed!: number;
  private _swimWalkSpeed!: number;
  private _flyRunSpeed!: number;
  private _flyWalkSpeed!: number;
  private _title!: string;
  private _isInCombat!: boolean;
  private _isNoble!: boolean;
  private _isHero!: boolean;
  private _isAttackable!: boolean;
  private _isTargetable!: boolean;
  private _target!: L2Object | null;
  private _sex!: Sex;
  private _recommHave!: number;
  private _classId!: number;
  private _className!: string;
  private _baseClassId!: number;
  private _baseClassName!: string;
  private _race!: Race;
  private _isMoving = false;
  private _movingDistance: number = 0;
  private _isReady = true;
  private _karma!: number;

  private _buffs: L2ObjectCollection<L2Buff> = new L2ObjectCollection();

  public get Buffs(): L2ObjectCollection<L2Buff> {
    return this._buffs;
  }
  public set Buffs(value: L2ObjectCollection<L2Buff>) {
    this._buffs = value;
  }

  public get Race(): Race {
    return this._race;
  }

  public set Race(value: Race) {
    this._race = value;
  }

  public get BaseClassName(): string {
    return this._baseClassName;
  }

  public set BaseClassName(value: string) {
    this._baseClassName = value;
  }

  public get BaseClassId(): number {
    return this._baseClassId;
  }

  public set BaseClassId(value: number) {
    this._baseClassId = value;
  }

  public get ClassId(): number {
    return this._classId;
  }

  public set ClassId(value: number) {
    this._classId = value;
  }

  public get ClassName(): string {
    return this._className;
  }

  public set ClassName(value: string) {
    this._className = value;
  }

  public get IsReady(): boolean {
    return this._isReady;
  }
  public set IsReady(value: boolean) {
    this._isReady = value;
  }

  public get Sex(): Sex {
    return this._sex;
  }

  public set Sex(value: Sex) {
    this._sex = value;
  }

  public get Title(): string {
    return this._title;
  }

  public set Title(value: string) {
    this._title = value;
  }

  public get IsTargetable(): boolean {
    return this._isTargetable;
  }

  public set IsTargetable(value: boolean) {
    this._isTargetable = value;
  }

  public get Target(): L2Object | null {
    return this._target;
  }

  public set Target(value: L2Object | null) {
    this._target = value;
  }

  public get IsAttackable(): boolean {
    return this._isAttackable;
  }

  public set IsAttackable(value: boolean) {
    this._isAttackable = value;
  }

  public get FlyWalkSpeed(): number {
    return this._flyWalkSpeed;
  }

  public set FlyWalkSpeed(value: number) {
    this._flyWalkSpeed = value;
  }

  public get FlyRunSpeed(): number {
    return this._flyRunSpeed;
  }

  public set FlyRunSpeed(value: number) {
    this._flyRunSpeed = value;
  }

  public get SwimWalkSpeed(): number {
    return this._swimWalkSpeed;
  }

  public set SwimWalkSpeed(value: number) {
    this._swimWalkSpeed = value;
  }

  public get SwimRunSpeed(): number {
    return this._swimRunSpeed;
  }

  public set SwimRunSpeed(value: number) {
    this._swimRunSpeed = value;
  }

  public get Hp(): number {
    return this._hp;
  }

  public set Hp(value: number) {
    this._hp = value;
    this._hpPercent = (100 * this._hp) / this._maxHp;
    this._isDead = value === 0;
  }

  public get Mp(): number {
    return this._mp;
  }

  public set Mp(value: number) {
    this._mp = value;
    this._mpPercent = (100 * this._mp) / this._maxMp;
  }

  public get MaxHp(): number {
    return this._maxHp;
  }

  public set MaxHp(value: number) {
    this._maxHp = value;
    this._hpPercent = (100 * this._hp) / this._maxHp;
  }

  public get MaxMp(): number {
    return this._maxMp;
  }

  public set MaxMp(value: number) {
    this._maxMp = value;
    this._mpPercent = (100 * this._mp) / this._maxMp;
  }

  public get IsRunning(): boolean {
    return this._isRunning;
  }

  public set IsRunning(value: boolean) {
    this._isRunning = value;
  }

  public get IsSitting(): boolean {
    return this._isSitting;
  }

  public set IsSitting(value: boolean) {
    this._isSitting = value;
  }

  public get IsFishing(): boolean {
    return this._isFishing;
  }

  public set IsFishing(value: boolean) {
    this._isFishing = value;
  }

  public get HpPercent(): number {
    return this._hpPercent;
  }

  public set HpPercent(value: number) {
    this._hpPercent = value;
  }

  public get MpPercent(): number {
    return this._mpPercent;
  }

  public set MpPercent(value: number) {
    this._mpPercent = value;
  }

  public get Dx(): number {
    return this._dx;
  }

  public set Dx(value: number) {
    this._dx = value;
  }

  public get Dy(): number {
    return this._dy;
  }

  public set Dy(value: number) {
    this._dy = value;
  }

  public get Dz(): number {
    return this._dz;
  }

  public set Dz(value: number) {
    this._dz = value;
  }

  public get IsDead(): boolean {
    return this._isDead;
  }

  public set IsDead(value: boolean) {
    this._isDead = value;
  }

  public get RunSpeed(): number {
    return this._runSpeed;
  }

  public set RunSpeed(value: number) {
    this._runSpeed = value;
  }

  public get WalkSpeed(): number {
    return this._walkSpeed;
  }

  public set WalkSpeed(value: number) {
    this._walkSpeed = value;
  }

  public get SpeedMultiplier(): number {
    return this._speedMultiplier;
  }

  public set SpeedMultiplier(value: number) {
    this._speedMultiplier = value;
  }

  public get AtkSpdMultiplier(): number {
    return this._atkSpdMultiplier;
  }

  public set AtkSpdMultiplier(value: number) {
    this._atkSpdMultiplier = value;
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
  public get RecommHave(): number {
    return this._recommHave;
  }

  public set RecommHave(value: number) {
    this._recommHave = value;
  }

  public get Karma(): number {
    return this._karma;
  }

  public set Karma(value: number) {
    this._karma = value;
  }

  public get IsInCombat(): boolean {
    return this._isInCombat;
  }

  public set IsInCombat(value: boolean) {
    this._isInCombat = value;
  }

  public get IsNoble(): boolean {
    return this._isNoble;
  }

  public set IsNoble(value: boolean) {
    this._isNoble = value;
  }

  public get IsHero(): boolean {
    return this._isHero;
  }

  public set IsHero(value: boolean) {
    this._isHero = value;
  }

  public get IsMoving(): boolean {
    return this._isMoving;
  }

  public set IsMoving(isMoving: boolean) {
    const wasMoving = this._isMoving;
    this._isMoving = isMoving;
    if (!isMoving) {
      this._movingDistance = 0;
    }
    if (isMoving !== wasMoving) {
      this.fire(`${isMoving ? "Start" : "Stop"}Moving`, { creature: this });
    }
  }

  /**
   * @returns Distance length that was requested to move
   */
  public get MovingDistance(): number {
    return this._movingDistance;
  }

  public set MovingDistance(value: number) {
    this._movingDistance = value;
  }

  public get CurrentSpeed(): number {
    return this.IsRunning
      ? this.RunSpeed * (this.SpeedMultiplier > 0 ? this.SpeedMultiplier : 1)
      : this.WalkSpeed * (this.SpeedMultiplier > 0 ? this.SpeedMultiplier : 1);
  }

  private _moveInterval!: ReturnType<typeof setInterval> | null;

  public setMovingTo(
    x: number,
    y: number,
    z: number,
    dx: number,
    dy: number,
    dz: number,
    heading?: number
  ): void {
    if (this._moveInterval) {
      clearInterval(this._moveInterval);

      // Trigger event as we might changed direction
      if (this.IsMoving) {
        this.IsMoving = false;
      }
    }

    this.Dx = dx;
    this.Dy = dy;
    this.Dz = dz;

    this.X = x;
    this.Y = y;
    this.Z = z;

    if (!heading) {
      let angleTarget = Math.atan2(dy - y, dx - x) * (180 / Math.PI);
      if (angleTarget < 0)
        angleTarget = 360 + angleTarget;
      this.Heading = Math.floor(angleTarget * 182.044444444);
    } else {
      this.Heading = heading;
    }

    this.IsMoving = true;

    const movingVector: Vector = new Vector(dx - this.X, dy - this.Y);
    this._movingDistance = movingVector.length();

    let ticks = Math.ceil(this._movingDistance / (this.CurrentSpeed / 10));
    movingVector.normalize();

    // TODO: Improve this as it will drift for larger movements
    this._moveInterval = setInterval(() => {
      // Check if movement was not cancelled by the server
      if (!this.IsMoving) {
        if (this._moveInterval) clearInterval(this._moveInterval);
        this._moveInterval = null;
        return;
      }

      const dx = Math.floor(movingVector.X * (this.CurrentSpeed / 10));
      const dy = Math.floor(movingVector.Y * (this.CurrentSpeed / 10));

      this._movingDistance -= Math.sqrt(dx*dx + dy*dy);
      this.X += dx;
      this.Y += dy;

      ticks--;
      if (ticks <= 0) {
        this.X = this.Dx;
        this.Y = this.Dy;
        this._movingDistance = 0;

        this.IsMoving = false;

        if (this._moveInterval) clearInterval(this._moveInterval);
        this._moveInterval = null;
      }
    }, 100).unref();
  }

  private th!: ReturnType<typeof setTimeout> | null;

  public set HiTime(value: number) {
    this.IsReady = false;
    if (this.th) {
      clearTimeout(this.th);
      this.th = null;
    }

    this.th = setTimeout(() => {
      this.IsReady = true;
    }, value).unref();
  }
}
