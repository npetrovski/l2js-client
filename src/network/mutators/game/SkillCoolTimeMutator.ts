import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import SkillCoolTime from "@network/incoming/game/xC7_SkillCoolTime";

export default class SkillCoolTimeMutator extends IMMOClientMutator<
  GameClient,
  SkillCoolTime
> {
  update(packet: SkillCoolTime): void {
    packet.BuffsList.forEach((row) => {
      const buff = this.Client.BuffsList.getEntryById(row.id);
      if (buff) {
        buff.RemainingTime = row.remaining * 1000;
        buff.SkillLevel = row.lvl;
      }
    });
  }
}
