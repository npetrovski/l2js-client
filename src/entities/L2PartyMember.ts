import L2Character from "./L2Character";
import L2Buff from "./L2Buff";

export default class L2PartyMember extends L2Character {
  private _buffs!: L2Buff[];

  private _isPartyLeader!: boolean;

  public get Buffs(): L2Buff[] {
    return this._buffs;
  }
  public set Buffs(value: L2Buff[]) {
    this._buffs = value;
  }

  public get IsPartyLeader(): boolean {
    return this._isPartyLeader;
  }

  public set IsPartyLeader(value: boolean) {
    this._isPartyLeader = value;
  }
}
