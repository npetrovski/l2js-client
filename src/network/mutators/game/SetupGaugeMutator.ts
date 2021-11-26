import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import SetupGauge from "../../incoming/game/SetupGauge";

export default class SetupGaugeMutator extends IMMOClientMutator<
  GameClient,
  SetupGauge
> {
  update(packet: SetupGauge): void {
    if (
      this.Client.ActiveChar.ObjectId === packet.CharObjectId &&
      packet.CurrentTime === packet.MaxTime &&
      packet.CurrentTime > 0
    ) {
      this.Client.ActiveChar.Gauge = packet.CurrentTime;
    }
  }
}
