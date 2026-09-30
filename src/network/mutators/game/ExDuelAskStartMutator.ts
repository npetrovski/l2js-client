import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import ExDuelAskStart from "@network/incoming/game/xFE_x4C_ExDuelAskStart";
import GameClient from "@network/GameClient";

export default class ExDuelAskStartMutator extends IMMOClientMutator<
  GameClient,
  ExDuelAskStart
> {
  update(packet: ExDuelAskStart): void {
    this.fire("RequestedDuel", {
      requestorName: packet.RequestorName,
    });
  }
}
