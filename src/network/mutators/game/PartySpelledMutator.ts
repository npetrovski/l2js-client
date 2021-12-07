import L2PartyMember from "../../../entities/L2PartyMember";
import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import PartySpelled from "../../incoming/game/PartySpelled";

export default class PartySpelledMutator extends IMMOClientMutator<
  GameClient,
  PartySpelled
> {
  update(packet: PartySpelled): void {
    const creature = new L2PartyMember();
    creature.ObjectId = packet.PartyMemberObjectId;

    if (creature) {
      creature.Buffs.clear();
      packet.PartyMemberBuffs.forEach((buff) => {
        creature.Buffs.add(buff);
      });

      this.fire("PartySpelled", { creature });
    }
  }
}
