import L2Object from "./L2Object";
import { SkillOperateType } from "../enums/SkillOperateType";

export default class L2Skill extends L2Object {
  private _isActive!: boolean;
  private _isNeedTarget!: boolean;
  private _isNeedItem!: boolean;
  private _isDebuff!: boolean;
  private _isRunning!: boolean;
  private _isEnchanted!: boolean;
  private _isReady: boolean = true;
  private _haveItems!: boolean;
  private _progress!: number;
  private _level!: number;
  private _max!: number;
  private _reuseDelay!: number;
  private _elapsed!: number;
  private _remaining!: number;
  private _operateType!: SkillOperateType;
  private _mp!: number;
  private _range!: number;
  private _itemId!: number;
  private _itemCount!: number;

  public get OperateType(): SkillOperateType {
    return this._operateType;
  }
  public set OperateType(value: SkillOperateType) {
    this._operateType = value;
  }

  public get IsActive(): boolean {
    return this._isActive;
  }

  public get IsNeedTarget(): boolean {
    return this._isNeedTarget;
  }

  public get IsNeedItem(): boolean {
    return this._isNeedItem;
  }

  public get IsDebuff(): boolean {
    return this._isDebuff;
  }

  public get IsRunning(): boolean {
    return this._isRunning;
  }

  public get IsEnchanted(): boolean {
    return this._isEnchanted;
  }

  public get IsReady(): boolean {
    return this._isReady;
  }

  public get HaveItems(): boolean {
    return this._haveItems;
  }

  public get Progress(): number {
    return this._progress;
  }

  public get Level(): number {
    return this._level;
  }

  public get Max(): number {
    return this._max;
  }

  public get ReuseDelay(): number {
    return this._reuseDelay;
  }

  public get Elapsed(): number {
    return this._elapsed;
  }

  public get Remaining(): number {
    return this._remaining;
  }

  public get Mp(): number {
    return this._mp;
  }

  public get Range(): number {
    return this._range;
  }

  public get ItemId(): number {
    return this._itemId;
  }

  public get ItemCount(): number {
    return this._itemCount;
  }

  public set IsActive(value: boolean) {
    this._isActive = value;
  }

  public set IsNeedTarget(value: boolean) {
    this._isNeedTarget = value;
  }

  public set IsNeedItem(value: boolean) {
    this._isNeedItem = value;
  }

  public set IsDebuff(value: boolean) {
    this._isDebuff = value;
  }

  public set IsRunning(value: boolean) {
    this._isRunning = value;
  }

  public set IsEnchanted(value: boolean) {
    this._isEnchanted = value;
  }

  public set IsReady(value: boolean) {
    this._isReady = value;
  }

  public set HaveItems(value: boolean) {
    this._haveItems = value;
  }

  public set Progress(value: number) {
    this._progress = value;
  }

  public set Level(value: number) {
    this._level = value;
  }

  public set Max(value: number) {
    this._max = value;
  }

  public th!: ReturnType<typeof setTimeout>;

  public set ReuseDelay(value: number) {
    this.IsReady = false;
    this._reuseDelay = value;
    if (this.th) {
      clearTimeout(this.th);
    }
    const t = value - this.Elapsed;
    this.th = setTimeout(() => {
      this.IsReady = true;
    }, this.Remaining);
  }

  public set Elapsed(value: number) {
    this._elapsed = value;
  }

  public set Remaining(value: number) {
    this._remaining = value;
  }

  public set Mp(value: number) {
    this._mp = value;
  }

  public set Range(value: number) {
    this._range = value;
  }

  public set ItemId(value: number) {
    this._itemId = value;
  }

  public set ItemCount(value: number) {
    this._itemCount = value;
  }
}
