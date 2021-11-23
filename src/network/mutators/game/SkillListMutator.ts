import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";
import L2Skill from "../../../entities/L2Skill";

export default class SkillListMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    (packet.get("skills") as Record<string, number>[]).forEach((data) => {
      const skill = new L2Skill();
      skill.IsActive = data.passive === 0; // 1 - passive
      skill.Level = data.level;
      skill.Id = data.skill;

      this.Client.SkillsList.removeById(skill.Id);
      this.Client.SkillsList.add(skill);
    });
  }
}
