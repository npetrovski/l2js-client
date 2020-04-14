import L2CharTemplate from "./L2CharTemplate";
import Skill from "../../skills/Skill";
import { Sex } from "../../../enums/Sex";

export default class L2NpcTemplate extends L2CharTemplate {
  private _id!: number;
  private _displayId!: number;
  private _level!: number;
  private _type!: string;
  private _name!: string;
  private _usingServerSideName!: boolean;
  private _title!: string;
  private _usingServerSideTitle!: boolean;
  private _parameters: Map<string, object> = new Map();
  private _sex!: Sex;
  private _chestId!: number;
  private _rhandId!: number;
  private _lhandId!: number;
  private _weaponEnchant!: number;
  private _expRate!: number;
  private _sp!: number;
  private _raidPoints!: number;
  private _unique!: boolean;
  private _attackable!: boolean;
  private _targetable!: boolean;
  private _undying!: boolean;
  private _showName!: boolean;
  private _flying!: boolean;
  private _canMove!: boolean;
  private _noSleepMode!: boolean;
  private _passableDoor!: boolean;
  private _hasSummoner!: boolean;
  private _canBeSown!: boolean;
  private _corpseTime!: number;

  private _aggroRange!: number;
  private _clanHelpRange!: number;
  private _dodge!: number;
  private _isChaos!: boolean;
  private _isAggressive!: boolean;
  private _soulShot!: number;
  private _spiritShot!: number;
  private _soulShotChance!: number;
  private _spiritShotChance!: number;
  private _minSkillChance!: number;
  private _maxSkillChance!: number;
  private _skills: Map<number, Skill> = new Map();

  private _clans: Set<number> = new Set();
  private _ignoreClanNpcIds: Set<number> = new Set();
  //private _dropLists: Map<DropListScope, List<IDropItem>> = new Map();
  private _collisionRadiusGrown!: number;
  private _collisionHeightGrown!: number;

  //private _teachInfo: Set<ClassId> = new List();

  public getId(): number {
    return this._id;
  }

  public getDisplayId(): number {
    return this._displayId;
  }

  public getLevel(): number {
    return this._level;
  }

  public getType(): string {
    return this._type;
  }

  public getName(): string {
    return this._name;
  }

  public getUsingServerSideName(): boolean {
    return this._usingServerSideName;
  }

  public getTitle(): string {
    return this._title;
  }

  public getUsingServerSideTitle(): boolean {
    return this._usingServerSideTitle;
  }

  public getParameters(): Map<string, object> {
    return this._parameters;
  }

  public getSex(): Sex {
    return this._sex;
  }

  public getChestId(): number {
    return this._chestId;
  }

  public getRhandId(): number {
    return this._rhandId;
  }

  public getLhandId(): number {
    return this._lhandId;
  }

  public getWeaponEnchant(): number {
    return this._weaponEnchant;
  }

  public getExpRate(): number {
    return this._expRate;
  }

  public getSp(): number {
    return this._sp;
  }

  public getRaidPoints(): number {
    return this._raidPoints;
  }

  public getUnique(): boolean {
    return this._unique;
  }

  public getAttackable(): boolean {
    return this._attackable;
  }

  public getTargetable(): boolean {
    return this._targetable;
  }

  public getUndying(): boolean {
    return this._undying;
  }

  public getShowName(): boolean {
    return this._showName;
  }

  public getFlying(): boolean {
    return this._flying;
  }

  public getCanMove(): boolean {
    return this._canMove;
  }

  public getNoSleepMode(): boolean {
    return this._noSleepMode;
  }

  public getPassableDoor(): boolean {
    return this._passableDoor;
  }

  public getHasSummoner(): boolean {
    return this._hasSummoner;
  }

  public getCanBeSown(): boolean {
    return this._canBeSown;
  }

  public getCorpseTime(): number {
    return this._corpseTime;
  }

  public getAggroRange(): number {
    return this._aggroRange;
  }

  public getClanHelpRange(): number {
    return this._clanHelpRange;
  }

  public getDodge(): number {
    return this._dodge;
  }

  public getIsChaos(): boolean {
    return this._isChaos;
  }

  public getIsAggressive(): boolean {
    return this._isAggressive;
  }

  public getSoulShot(): number {
    return this._soulShot;
  }

  public getSpiritShot(): number {
    return this._spiritShot;
  }

  public getSoulShotChance(): number {
    return this._soulShotChance;
  }

  public getSpiritShotChance(): number {
    return this._spiritShotChance;
  }

  public getMinSkillChance(): number {
    return this._minSkillChance;
  }

  public getMaxSkillChance(): number {
    return this._maxSkillChance;
  }

  public getSkills(): Map<number, Skill> {
    return this._skills;
  }

  public getClans(): Set<number> {
    return this._clans;
  }

  public getIgnoreClanNpcIds(): Set<number> {
    return this._ignoreClanNpcIds;
  }

  //   public getDropLists(): Map<DropListScope, List<IDropItem>> {
  //     return this._dropLists;
  //   }

  public getCollisionRadiusGrown(): number {
    return this._collisionRadiusGrown;
  }

  public getCollisionHeightGrown(): number {
    return this._collisionHeightGrown;
  }

  //   public getTeachInfo(): List<ClassId> {
  //     return this._teachInfo;
  //   }

  public setId(value: number) {
    this._id = value;
  }

  public setDisplayId(value: number) {
    this._displayId = value;
  }

  public setLevel(value: number) {
    this._level = value;
  }

  public setType(value: string) {
    this._type = value;
  }

  public setName(value: string) {
    this._name = value;
  }

  public setUsingServerSideName(value: boolean) {
    this._usingServerSideName = value;
  }

  public setTitle(value: string) {
    this._title = value;
  }

  public setUsingServerSideTitle(value: boolean) {
    this._usingServerSideTitle = value;
  }

  public setParameters(value: Map<string, object>) {
    this._parameters = value;
  }

  public setSex(value: Sex) {
    this._sex = value;
  }

  public setChestId(value: number) {
    this._chestId = value;
  }

  public setRhandId(value: number) {
    this._rhandId = value;
  }

  public setLhandId(value: number) {
    this._lhandId = value;
  }

  public setWeaponEnchant(value: number) {
    this._weaponEnchant = value;
  }

  public setExpRate(value: number) {
    this._expRate = value;
  }

  public setSp(value: number) {
    this._sp = value;
  }

  public setRaidPoints(value: number) {
    this._raidPoints = value;
  }

  public setUnique(value: boolean) {
    this._unique = value;
  }

  public setAttackable(value: boolean) {
    this._attackable = value;
  }

  public setTargetable(value: boolean) {
    this._targetable = value;
  }

  public setUndying(value: boolean) {
    this._undying = value;
  }

  public setShowName(value: boolean) {
    this._showName = value;
  }

  public setFlying(value: boolean) {
    this._flying = value;
  }

  public setCanMove(value: boolean) {
    this._canMove = value;
  }

  public setNoSleepMode(value: boolean) {
    this._noSleepMode = value;
  }

  public setPassableDoor(value: boolean) {
    this._passableDoor = value;
  }

  public setHasSummoner(value: boolean) {
    this._hasSummoner = value;
  }

  public setCanBeSown(value: boolean) {
    this._canBeSown = value;
  }

  public setCorpseTime(value: number) {
    this._corpseTime = value;
  }

  public setAggroRange(value: number) {
    this._aggroRange = value;
  }

  public setClanHelpRange(value: number) {
    this._clanHelpRange = value;
  }

  public setDodge(value: number) {
    this._dodge = value;
  }

  public setIsChaos(value: boolean) {
    this._isChaos = value;
  }

  public setIsAggressive(value: boolean) {
    this._isAggressive = value;
  }

  public setSoulShot(value: number) {
    this._soulShot = value;
  }

  public setSpiritShot(value: number) {
    this._spiritShot = value;
  }

  public setSoulShotChance(value: number) {
    this._soulShotChance = value;
  }

  public setSpiritShotChance(value: number) {
    this._spiritShotChance = value;
  }

  public setMinSkillChance(value: number) {
    this._minSkillChance = value;
  }

  public setMaxSkillChance(value: number) {
    this._maxSkillChance = value;
  }

  public setSkills(value: Map<number, Skill>) {
    this._skills = value;
  }

  public setClans(value: Set<number>) {
    this._clans = value;
  }

  public setIgnoreClanNpcIds(value: Set<number>) {
    this._ignoreClanNpcIds = value;
  }

  //   public setDropLists(value: Map<DropListScope, List<IDropItem>>) {
  //     this._dropLists = value;
  //   }

  public setCollisionRadiusGrown(value: number) {
    this._collisionRadiusGrown = value;
  }

  public setCollisionHeightGrown(value: number) {
    this._collisionHeightGrown = value;
  }

  //   public setTeachInfo(value: List<ClassId>) {
  //     this._teachInfo = value;
  //   }
}
