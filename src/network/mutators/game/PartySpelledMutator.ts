import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import PartySpelled from "../../incoming/game/PartySpelled";


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
      packet.PartyMemberBuffs.forEach(buff => {
        creature.Buffs.add(buff);
      });

      this.fire("PartySpelled", { creature });
    }
  }
}
