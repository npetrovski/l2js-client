import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class TeleportToLocationMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    if ((packet.get("actor_oid") as number) === this.Client.ActiveChar.ObjectId) {
      this.Client.CreaturesList.clear();
      this.Client.DroppedItems.clear();
    }

    const creature = this.Client.CreaturesList.getEntryByObjectId(packet.get("actor_oid") as number);
    if (creature) {
      creature.setLocation(
        packet.get("destination_x") as number,
        packet.get("destination_y") as number,
        packet.get("destination_z") as number
      );
    }
  }
}
