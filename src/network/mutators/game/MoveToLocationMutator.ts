import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class MoveToLocationMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const creature = this.Client.CreaturesList.getEntryByObjectId(packet.get("actor_oid") as number);
    if (creature) {
      creature.setMovingTo(
        packet.get("current_x") as number,
        packet.get("current_y") as number,
        packet.get("current_z") as number,
        packet.get("destination_x") as number,
        packet.get("destination_y") as number,
        packet.get("destination_z") as number
      );

      if (creature.ObjectId !== this.Client.ActiveChar.ObjectId) {
        creature.calculateDistance(this.Client.ActiveChar);
      }
    }
  }
}
