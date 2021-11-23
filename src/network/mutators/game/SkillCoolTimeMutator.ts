import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class SkillCoolTimeMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    (packet.get("skills") as Record<string, number>[]).forEach((data) => {
      const buff = this.Client.BuffsList.getEntryById(data.skill);
      if (buff) {
        buff.RemainingTime = data.remaining_time * 1000;
        buff.SkillLevel = data.level;
      }
    });
  }
}
