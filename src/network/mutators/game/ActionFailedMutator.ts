import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import ActionFailed from "../../incoming/game/ActionFailed";
import GameClient from "../../GameClient";

export default class ActionFailedMutator extends IMMOClientMutator<
  GameClient,
  ActionFailed
> {
  update(packet: ActionFailed): void {
    this.fire("ActionFailed");
  }
}
