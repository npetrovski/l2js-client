import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import MagicSkillUse from "../../incoming/game/MagicSkillUse";


export default class MagicSkillUseMutator extends IMMOClientMutator<
  GameClient,
  MagicSkillUse
> {
  update(packet: MagicSkillUse): void {
    const skill = this.Client.SkillsList.getEntryById(packet.SkillId);
    if (skill) {
      skill.Level = packet.SkillLevel;
      skill.Remaining = packet.ReuseDelay;
      skill.ReuseDelay = packet.ReuseDelay;
    }

    const creature = this.Client.CreaturesList.getEntryByObjectId(
      packet.ActiveCharObjId
    );
    if (creature) {
      creature.HiTime = packet.HitTime;
    }
  }
}
