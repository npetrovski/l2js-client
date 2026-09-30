import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import PartySpelled from "@network/incoming/game/xF4_PartySpelled";

export default class PartySpelledMutator extends IMMOClientMutator<
  GameClient,
  PartySpelled
> {
  update(packet: PartySpelled): void {
    const creature = this.Client.PartyList.getEntryByObjectId(
      packet.PartyMemberObjectId
    );
    if (creature) {
      creature.Buffs.clear();
      packet.PartyMemberBuffs.forEach((buff) => {
        creature.Buffs.add(buff);
      });

      this.fire("PartySpelled", { creature });
    }
  }
}
