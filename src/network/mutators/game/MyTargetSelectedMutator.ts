import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class MyTargetSelectedMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const npc = this.Client.CreaturesList.getEntryByObjectId(packet.get("target_oid") as number);
    if (npc) {
      this.Client.ActiveChar.Target = npc;
    }

    GlobalEvents.fire("MyTargetSelected", {
      objectId: packet.get("target_oid") as number,
    });
  }
}
