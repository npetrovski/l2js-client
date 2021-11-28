import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import TargetSelected from "../../incoming/game/TargetSelected";

export default class TargetSelectedMutator extends IMMOClientMutator<
  GameClient,
  TargetSelected
> {
  update(packet: TargetSelected): void {
    const char = this.Client.CreaturesList.getEntryByObjectId(packet.ObjectId);
    if (char) {
      const target = this.Client.CreaturesList.getEntryByObjectId(
        packet.TargetObjectId
      );
      if (target) {
        char.Target = target;
      }
    }

    this.fire("TargetSelected", {
      objectId: packet.ObjectId,
      targetObjectId: packet.TargetObjectId,
      targetLocation: packet.Location,
    });
  }
}
