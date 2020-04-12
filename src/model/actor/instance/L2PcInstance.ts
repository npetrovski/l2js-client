import L2Playable from "../L2Playable";
import PcAppearance from "../appearance/PcAppearance";
import Shortcut from "../../Shortcut";
/**
 * This class represents all player characters in the world.
 */
export default class L2PcInstance extends L2Playable {
  private _clanId: number = 0;

  private _appearance: PcAppearance = new PcAppearance();

  private _shortCuts: Shortcut[] = [];

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
}
