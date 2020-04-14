import L2Character from "./L2Character";
import L2NpcTemplate from "./templates/L2NpcTemplate";
import NpcStat from "./stat/NpcStat";
import NpcStatus from "./status/NpcStatus";

export default class L2Npc extends L2Character {
  private _npcTemplate: L2NpcTemplate = new L2NpcTemplate();

  private _npcStat: NpcStat = new NpcStat();

  private _npcStatus: NpcStatus = new NpcStatus();

  public getTemplate(): L2NpcTemplate {
    return this._npcTemplate;
  }

  public getStat(): NpcStat {
    return this._npcStat;
  }

  public getStatus(): NpcStatus {
    return this._npcStatus;
  }
}
