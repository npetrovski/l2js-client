import L2Character from "@entities/L2Character";
import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import PledgeInfo from "@network/incoming/game/x89_PledgeInfo";

export default class PledgeInfoMutator extends IMMOClientMutator<GameClient, PledgeInfo> {
  update(packet: PledgeInfo): void {
    const knownClan = this.Client.ClansList.getEntryById(packet.Clan.Id);
    const clan = knownClan ?? packet.Clan;
    if (knownClan) {
      Object.assign(knownClan, packet.Clan);
    } else {
      this.Client.ClansList.add(clan);
    }

    this.Client.CreaturesList.forEach((creature) => {
      if (creature instanceof L2Character && creature.Clan?.Id === clan.Id) {
        creature.Clan = clan;
      }
    });
    if (this.Client.ActiveChar.Clan?.Id === clan.Id) {
      this.Client.ActiveChar.Clan = clan;
    }
    this.fire("PledgeInfo", { clan });
  }
}
