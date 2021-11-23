import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import L2Character from "../../../entities/L2Character";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class ChangeWaitTypeMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const creature = this.Client.CreaturesList.getEntryByObjectId(packet.get("actor_oid") as number);
    if (creature && creature instanceof L2Character) {
      creature.setLocation(
        packet.get("actor_x") as number,
        packet.get("actor_y") as number,
        packet.get("actor_z") as number
      );
      creature.IsSitting = (packet.get("waiting_mode") as number) === 0; // 0 - sitting; 1 - standing; 2 - start fake dead; 3 - stop fake dead
    }
  }
}
