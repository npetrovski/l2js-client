import L2Character from "./L2Character";
import PlayableStat from "./stat/PlayableStat";

export default abstract class L2Playable extends L2Character {
  private _playableStat: PlayableStat = new PlayableStat();

  public getStat(): PlayableStat {
    return this._playableStat;
  }

  public setStat(value: PlayableStat) {
    this._playableStat = value;
  }
}
