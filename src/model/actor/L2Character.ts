import L2Object from "../L2Object";
import ISkillsHolder from "../interfaces/ISkillsHolder";
import IDeletable from "../interfaces/IDeletable";
import Skill from "../skills/Skill";
import CharStatus from "./status/CharStatus";

export default abstract class L2Character extends L2Object implements ISkillsHolder, IDeletable {
  private _title: string = "";

  private _status: CharStatus = new CharStatus();

  public getStatus(): CharStatus {
    return this._status;
  }

  public setStatus(value: CharStatus) {
    this._status = value;
  }

  getSkills(): Map<number, Skill> {
    throw new Error("Method not implemented.");
  }
  addSkill(skill: Skill): Skill {
    throw new Error("Method not implemented.");
  }
  getKnownSkill(skillId: number): Skill {
    throw new Error("Method not implemented.");
  }
  getSkillLevel(skillId: any): number {
    throw new Error("Method not implemented.");
  }
  deleteMe(): boolean {
    throw new Error("Method not implemented.");
  }
  getTitle(): string {
    return this._title;
  }
  setTitle(title: string): void {
    this._title = title;
  }
}
