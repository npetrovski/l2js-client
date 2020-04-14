import L2Playable from "../L2Playable";
import PcAppearance from "../appearance/PcAppearance";
import Shortcut from "../../Shortcut";
import PcInventory from "../../itemcontainer/PcInventory";

/**
 * This class represents all player characters in the world.
 */
export default class L2PcInstance extends L2Playable {
  private _recomLeft!: number;
  private _recomHave!: number;
  private _recoBonusTime!: number;
  private _recoBonusVal!: number;
  private _recoBonusType!: number;

  private _accountName: string = "";

  private _clanId: number = 0;

  private _appearance: PcAppearance = new PcAppearance();

  private _shortCuts: Shortcut[] = [];

  private _inventory!: PcInventory;

  public getInventory(): PcInventory {
    return this._inventory;
  }

  public setInventory(value: PcInventory) {
    this._inventory = value;
  }

  public getClanId(): number {
    return this._clanId;
  }

  public setClanId(value: number) {
    this._clanId = value;
  }

  public getAppearance(): PcAppearance {
    return this._appearance;
  }

  public setAppearance(value: PcAppearance) {
    this._appearance = value;
  }

  public getShortCuts(): Shortcut[] {
    return this._shortCuts;
  }

  public setShortCuts(value: Shortcut[]) {
    this._shortCuts = value;
  }

  public getRecomLeft(): number {
    return this._recomLeft;
  }

  public getRecomHave(): number {
    return this._recomHave;
  }

  public getRecoBonusTime(): number {
    return this._recoBonusTime;
  }

  public getRecoBonusVal(): number {
    return this._recoBonusVal;
  }

  public getRecoBonusType(): number {
    return this._recoBonusType;
  }

  public setRecomLeft(value: number) {
    this._recomLeft = value;
  }

  public setRecomHave(value: number) {
    this._recomHave = value;
  }

  public setRecoBonusTime(value: number) {
    this._recoBonusTime = value;
  }

  public setRecoBonusVal(value: number) {
    this._recoBonusVal = value;
  }

  public setRecoBonusType(value: number) {
    this._recoBonusType = value;
  }

  public getAccountName(): string {
    return this._accountName;
  }

  public setAccountName(value: string) {
    this._accountName = value;
  }
}
