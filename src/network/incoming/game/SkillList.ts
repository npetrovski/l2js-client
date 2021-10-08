import GameClientPacket from "./GameClientPacket";
import L2Skill from "../../../entities/L2Skill";

export default class SkillList extends GameClientPacket {
  Skills: L2Skill[] = [];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _skillsSize = this.readD();
    for (let i = 0; i < _skillsSize; i++) {
      const skill = new L2Skill();
      skill.IsActive = this.readD() === 0; // 1 - passive
      skill.Level = this.readD();
      skill.Id = this.readD();
      const _disabled = this.readC() === 1;
      skill.IsEnchanted = this.readC() === 1;

      this.Skills.push(skill);
    }

    return true;
  }
}
