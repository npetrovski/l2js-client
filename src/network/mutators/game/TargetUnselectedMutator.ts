import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import TargetUnselected from "../../incoming/game/TargetUnselected";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class TargetUnselectedMutator extends IMMOClientMutator<
  GameClient,
  TargetUnselected
> {
  update(packet: TargetUnselected): void {
    const char = this.Client.CreaturesList.getEntryByObjectId(packet.ObjectId);
    if (char) {
      char.Target = null;
    }
  }
}
