import Skill from "../skills/Skill";

export default interface ISkillsHolder {
  getSkills(): Map<number, Skill>;

  addSkill(skill: Skill): Skill;

  getKnownSkill(skillId: number): Skill;

  getSkillLevel(skillId: number): number;
}
