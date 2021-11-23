import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class DieMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    if ((packet.get("deceased_oid") as number) === this.Client.ActiveChar.ObjectId) {
      this.Client.BuffsList.clear();

      this.Client.ActiveChar.Target = null;
      this.Client.ActiveChar.IsDead = true;
    }

    const creature = this.Client.CreaturesList.getEntryByObjectId(packet.get("deceased_oid") as number);

    if (creature) {
      GlobalEvents.fire("Die", {
        creature,
        isSpoiled: (packet.get("can_be_sweeped") as number) === 1,
      });
    }
  }
}
