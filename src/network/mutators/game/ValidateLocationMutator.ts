import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class ValidateLocationMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const creature = this.Client.CreaturesList.getEntryByObjectId(packet.get("actor_oid") as number);
    if (creature) {
      creature.setLocation(
        packet.get("location_x") as number,
        packet.get("location_y") as number,
        packet.get("location_z") as number,
        packet.get("yaw") as number
      );
    }
  }
}
