import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import SetupGauge from "@network/incoming/game/x6B_SetupGauge";

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
