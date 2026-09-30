import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import TargetUnselected from "@network/incoming/game/x24_TargetUnselected";

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
