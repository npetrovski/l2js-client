import L2Object from "./L2Object";
import { Sex } from "../enums/Sex";
import { Race } from "../enums/Race";
import Vector from "../mmocore/Vector";
import { GlobalEvents } from "../mmocore/EventEmitter";

export default abstract class L2Creature extends L2Object {
  private _hp!: number;
  private _mp!: number;
  private _maxHp!: number;
  private _maxMp!: number;
  private _isRunning!: boolean;

  private _hpPercent!: number;
  private _mpPercent!: number;

  private _dx!: number;
  private _dy!: number;
  private _dz!: number;

  private _isDead: boolean = false;
  private _runSpeed!: number;
  private _walkSpeed!: number;
  private _speedMultiplier!: number;
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

  private _classId!: number;

  private _className!: string;

  private _baseClassId!: number;

  private _baseClassName!: string;

  private _race!: Race;
  private _isMoving: boolean = false;
  private _movingVector!: Vector;

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

  public get ClassName(): string {
    return this._className;
  }

  public set ClassId(value: number) {
    this._classId = value;
  }

  public set ClassName(value: string) {
    this._className = value;
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

  public get Mp(): number {
    return this._mp;
  }

  public get MaxHp(): number {
    return this._maxHp;
  }

  public get MaxMp(): number {
    return this._maxMp;
  }

  public get IsRunning(): boolean {
    return this._isRunning;
  }

  public get HpPercent(): number {
    return this._hpPercent;
  }

  public get MpPercent(): number {
    return this._mpPercent;
  }

  public get Dx(): number {
    return this._dx;
  }

  public get Dy(): number {
    return this._dy;
  }

  public get Dz(): number {
    return this._dz;
  }

  public get IsDead(): boolean {
    return this._isDead;
  }

  public get RunSpeed(): number {
    return this._runSpeed;
  }

  public get WalkSpeed(): number {
    return this._walkSpeed;
  }

  public get SpeedMultiplier(): number {
    return this._speedMultiplier;
  }

  public get IsInCombat(): boolean {
    return this._isInCombat;
  }

  public get IsNoble(): boolean {
    return this._isNoble;
  }

  public get IsHero(): boolean {
    return this._isHero;
  }

  public set Hp(value: number) {
    this._hp = value;
  }

  public set Mp(value: number) {
    this._mp = value;
  }

  public set MaxHp(value: number) {
    this._maxHp = value;
  }

  public set MaxMp(value: number) {
    this._maxMp = value;
  }

  public set IsRunning(value: boolean) {
    this._isRunning = value;
  }

  public set HpPercent(value: number) {
    this._hpPercent = value;
  }

  public set MpPercent(value: number) {
    this._mpPercent = value;
  }

  public set Dx(value: number) {
    this._dx = value;
  }

  public set Dy(value: number) {
    this._dy = value;
  }

  public set Dz(value: number) {
    this._dz = value;
  }

  public set IsDead(value: boolean) {
    this._isDead = value;
  }

  public set RunSpeed(value: number) {
    this._runSpeed = value;
  }

  public set WalkSpeed(value: number) {
    this._walkSpeed = value;
  }

  public set SpeedMultiplier(value: number) {
    this._speedMultiplier = value;
  }

  public set IsInCombat(value: boolean) {
    this._isInCombat = value;
  }

  public set IsNoble(value: boolean) {
    this._isNoble = value;
  }

  public set IsHero(value: boolean) {
    this._isHero = value;
  }

  public get IsMoving(): boolean {
    return this._isMoving;
  }

  public set IsMoving(value: boolean) {
    if (value) {
      GlobalEvents.fire("StartMoving", { creature: this });
    } else {
      GlobalEvents.fire("StopMoving", { creature: this });
    }
    clearInterval(this._moveInterval);
    this._isMoving = value;
  }

  public get MovingVector(): Vector {
    return this._movingVector;
  }

  public set MovingVector(value: Vector) {
    this._movingVector = value;
  }

  public get CurrentSpeed(): number {
    return this.IsRunning ? this.RunSpeed * this.SpeedMultiplier : this.WalkSpeed * this.SpeedMultiplier;
  }

  private _moveInterval!: ReturnType<typeof setInterval>;

  public setMovingTo(dx: number, dy: number, dz: number, heading?: number) {
    this.Dx = dx;
    this.Dy = dy;
    this.Dz = dz;
    this.MovingVector = new Vector(dx - this.X, dy - this.Y);

    let moveCnt = Math.ceil(this.MovingVector.length() / (this.CurrentSpeed / 10));
    this.IsMoving = true;

    this._moveInterval = setInterval(() => {
      this.MovingVector.normalize();
      this.X += Math.floor(this.MovingVector.X * (this.CurrentSpeed / 10));
      this.Y += Math.floor(this.MovingVector.Y * (this.CurrentSpeed / 10));

      moveCnt--;
      if (moveCnt > 0) {
        this.MovingVector = new Vector(dx - this.X, dy - this.Y);
      } else {
        this.IsMoving = false;
        this.X = this.Dx;
        this.Y = this.Dy;
      }
    }, 100);
  }
}
