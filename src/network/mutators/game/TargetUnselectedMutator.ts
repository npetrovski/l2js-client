import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class TargetUnselectedMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const char = this.Client.CreaturesList.getEntryByObjectId(packet.get("canceller_oid") as number);
    if (char) {
      char.Target = null;
    }
  }
}
