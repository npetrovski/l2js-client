import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class MoveToPawnMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const creature = this.Client.CreaturesList.getEntryByObjectId(packet.get("follower_oid") as number);
    if (creature) {
      creature.setMovingTo(
        packet.get("current_follower_x") as number,
        packet.get("current_follower_y") as number,
        packet.get("current_follower_z") as number,
        packet.get("current_target_x") as number,
        packet.get("current_target_y") as number,
        packet.get("current_target_z") as number
      );

      if (creature.ObjectId !== this.Client.ActiveChar.ObjectId) {
        creature.calculateDistance(this.Client.ActiveChar);
      }
    }
  }
}
