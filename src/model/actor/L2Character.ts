import L2Object from "../L2Object";
import ISkillsHolder from "../interfaces/ISkillsHolder";
import IDeletable from "../interfaces/IDeletable";
import Skill from "../skills/Skill";
import CharStatus from "./status/CharStatus";
import CharStat from "./stat/CharStat";
import L2CharTemplate from "./templates/L2CharTemplate";

export default abstract class L2Character extends L2Object implements ISkillsHolder, IDeletable {
  private _title: string = "";
  private _status: CharStatus = new CharStatus();
  private _stat: CharStat = new CharStat();
  private _isDead: boolean = false;
  private _isImmobilized: boolean = false;
  private _isOverloaded: boolean = false; // the char is carrying too much
  private _isParalyzed: boolean = false;
  private _isPendingRevive: boolean = false;
  private _isRunning: boolean = false;
  private _isNoRndWalk: boolean = false; // Is no random walk
  private _showSummonAnimation: boolean = false;
  private _isTeleporting: boolean = false;
  private _isInvul: boolean = false;
  private _isMortal: boolean = true; // Char will die when HP decreased to 0
  private _isFlying: boolean = false;
  private _isInCombat: boolean = false;
  private _template: L2CharTemplate = new L2CharTemplate();
  private _selected: L2Object | undefined;

  public getSelected(): L2Object | undefined {
    return this._selected;
  }

  public setSelected(value: L2Object | undefined) {
    this._selected = value;
  }

  public getTemplate(): L2CharTemplate {
    return this._template;
  }

  public setTemplate(value: L2CharTemplate) {
    this._template = value;
  }

  public getStat(): CharStat {
    return this._stat;
  }

  public setStat(value: CharStat) {
    this._stat = value;
  }

  public getStatus(): CharStatus {
    return this._status;
  }

  public setStatus(value: CharStatus) {
    this._status = value;
  }

  public getSkills(): Map<number, Skill> {
    throw new Error("Method not implemented.");
  }

  public addSkill(skill: Skill): Skill {
    throw new Error("Method not implemented.");
  }

  public getKnownSkill(skillId: number): Skill {
    throw new Error("Method not implemented.");
  }

  public getSkillLevel(skillId: any): number {
    throw new Error("Method not implemented.");
  }

  public deleteMe(): boolean {
    throw new Error("Method not implemented.");
  }

  public getTitle(): string {
    return this._title;
  }

  public setTitle(title: string): void {
    this._title = title;
  }

  public getIsDead(): boolean {
    return this._isDead;
  }

  public setIsDead(value: boolean) {
    this._isDead = value;
  }

  public getIsImmobilized(): boolean {
    return this._isImmobilized;
  }

  public setIsImmobilized(value: boolean) {
    this._isImmobilized = value;
  }

  public getIsOverloaded(): boolean {
    return this._isOverloaded;
  }

  public setIsOverloaded(value: boolean) {
    this._isOverloaded = value;
  }

  public getIsParalyzed(): boolean {
    return this._isParalyzed;
  }

  public setIsParalyzed(value: boolean) {
    this._isParalyzed = value;
  }

  public getIsPendingRevive(): boolean {
    return this._isPendingRevive;
  }

  public setIsPendingRevive(value: boolean) {
    this._isPendingRevive = value;
  }

  public getIsRunning(): boolean {
    return this._isRunning;
  }

  public setIsRunning(value: boolean) {
    this._isRunning = value;
  }

  public getIsNoRndWalk(): boolean {
    return this._isNoRndWalk;
  }

  public setIsNoRndWalk(value: boolean) {
    this._isNoRndWalk = value;
  }

  public getShowSummonAnimation(): boolean {
    return this._showSummonAnimation;
  }

  public setShowSummonAnimation(value: boolean) {
    this._showSummonAnimation = value;
  }

  public getIsTeleporting(): boolean {
    return this._isTeleporting;
  }

  public setIsTeleporting(value: boolean) {
    this._isTeleporting = value;
  }

  public getIsInvul(): boolean {
    return this._isInvul;
  }

  public setIsInvul(value: boolean) {
    this._isInvul = value;
  }

  public getIsMortal(): boolean {
    return this._isMortal;
  }

  public setIsMortal(value: boolean) {
    this._isMortal = value;
  }

  public getIsFlying(): boolean {
    return this._isFlying;
  }

  public setIsFlying(value: boolean) {
    this._isFlying = value;
  }

  public getIsInCombat(): boolean {
    return this._isInCombat;
  }

  public setIsInCombat(value: boolean) {
    this._isInCombat = value;
  }
}
