import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import AskJoinParty from "../../incoming/game/AskJoinParty";
import GameClient from "../../GameClient";

export default class AskJoinPartyMutator extends IMMOClientMutator<
  GameClient,
  AskJoinParty
> {
  update(packet: AskJoinParty): void {
    this.fire(`PartyRequest`, {
      requestorName: packet.RequestorName,
      partyDistributionType: packet.PartyDistributionType,
    });
  }
}
