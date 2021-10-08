import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import SkillCoolTime from "../../incoming/game/SkillCoolTime";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class SkillCoolTimeMutator extends IMMOClientMutator<
  GameClient,
  SkillCoolTime
> {
  update(packet: SkillCoolTime): void {
    packet.BuffsList.forEach(row => {
      const buff = this.Client.BuffsList.getEntryById(row.id);
      if (buff) {
        buff.RemainingTime = row.remaining * 1000;
        buff.SkillLevel = row.lvl;
      }
    });
  }
}
