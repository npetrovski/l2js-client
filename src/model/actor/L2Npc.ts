import L2Character from "./L2Character";
import L2NpcTemplate from "./templates/L2NpcTemplate";
import NpcStat from "./stat/NpcStat";
import NpcStatus from "./status/NpcStatus";

export default class L2Npc extends L2Character {
  private _templateId!: number;

  private _isAttackable: boolean = false;

  public getIsAttackable(): boolean {
    return this._isAttackable;
  }

  public setIsAttackable(value: boolean) {
    this._isAttackable = value;
  }

  public getTemplateId(): number {
    return this._templateId;
  }

  public setTemplateId(value: number) {
    this._templateId = value;
  }

  public getTemplate(): L2NpcTemplate {
    return super.getTemplate() as L2NpcTemplate;
  }

  public getStat(): NpcStat {
    return super.getStat() as NpcStat;
  }

  public getStatus(): NpcStatus {
    return super.getStatus() as NpcStatus;
  }

  public getLevel(): number {
    return this.getTemplate().getLevel();
  }

  public getName(): string {
    return this.getTemplate().getName();
  }

  public isTargetable(): boolean {
    return this.getTemplate().getTargetable();
  }
}
