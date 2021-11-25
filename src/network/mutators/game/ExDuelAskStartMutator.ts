import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import ExDuelAskStart from "../../incoming/game/ExDuelAskStart";
import GameClient from "../../GameClient";

export default class ExDuelAskStartMutator extends IMMOClientMutator<
  GameClient,
  ExDuelAskStart
> {
  update(packet: ExDuelAskStart): void {
    this.fire("RequestedDuel", {
        requestorName: packet.RequestorName
    });
  }
}
