import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";
import L2Buff from "../../../entities/L2Buff";

export default class PartySpelledMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const partyMemberObjectId = packet.get("member_oid") as number;
    const creature = this.Client.PartyList.getEntryByObjectId(partyMemberObjectId);
    if (creature) {
      creature.Buffs.clear();

      (packet.get("skills") as Record<string, number>[]).forEach((data) => {
        creature.Buffs.add(new L2Buff(data.skill, data.level));
      });

      GlobalEvents.fire("PartySpelled", { creature });
    }
  }
}
