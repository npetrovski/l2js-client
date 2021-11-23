import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class SetupGaugeMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    if (
      this.Client.ActiveChar.ObjectId === (packet.get("actor_oid") as number) &&
      (packet.get("time_left") as number) === (packet.get("total_time") as number) &&
      (packet.get("time_left") as number) > 0
    ) {
      this.Client.ActiveChar.Gauge = packet.get("time_left") as number;
    }
  }
}
