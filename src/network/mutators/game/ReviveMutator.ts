import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class ReviveMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const creature = this.Client.CreaturesList.getEntryByObjectId(packet.get("revived_oid") as number);
    if (creature) {
      creature.IsDead = false;
    }

    GlobalEvents.fire("Revive", { creature });
  }
}
