import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import SkillList from "../../incoming/game/SkillList";

export default class SkillListMutator extends IMMOClientMutator<
  GameClient,
  SkillList
> {
  update(packet: SkillList): void {
    packet.Skills.forEach((skill) => {
      this.Client.SkillsList.removeById(skill.Id);
      this.Client.SkillsList.add(skill);
    });
  }
}
