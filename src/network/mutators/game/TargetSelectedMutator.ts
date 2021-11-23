import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class TargetSelectedMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const char = this.Client.CreaturesList.getEntryByObjectId(packet.get("selector_oid") as number);
    if (char) {
      const target = this.Client.CreaturesList.getEntryByObjectId(packet.get("target_oid") as number);
      if (target) {
        char.Target = target;
      }
    }

    GlobalEvents.fire("TargetSelected", {
      objectId: packet.get("selector_oid") as number,
      targetObjectId: packet.get("target_oid") as number,
      targetLocation: [
        packet.get("selector_x") as number,
        packet.get("selector_y") as number,
        packet.get("selector_z") as number,
      ],
    });
  }
}
