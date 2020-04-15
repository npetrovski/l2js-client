import L2Character from "./L2Character";
import PlayableStat from "./stat/PlayableStat";
import PlayableStatus from "./status/PlayableStatus";

export default abstract class L2Playable extends L2Character {
  public getStat(): PlayableStat {
    return super.getStat() as PlayableStat;
  }

  public getStatus(): PlayableStatus {
    return super.getStatus() as PlayableStatus;
  }
}
