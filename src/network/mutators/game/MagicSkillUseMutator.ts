import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class MagicSkillUseMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const skill = this.Client.SkillsList.getEntryById(packet.get("skill") as number);
    if (skill) {
      skill.Level = packet.get("level") as number;
      skill.Remaining = packet.get("reuse_delay") as number;
      skill.ReuseDelay = packet.get("reuse_delay") as number;
    }

    const creature = this.Client.CreaturesList.getEntryByObjectId(packet.get("caster_oid") as number);
    if (creature) {
      creature.HiTime = packet.get("cast_time") as number;
    }
  }
}
