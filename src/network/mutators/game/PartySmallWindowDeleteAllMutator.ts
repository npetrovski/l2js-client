import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import PartySmallWindowDeleteAll from "../../incoming/game/PartySmallWindowDeleteAll";

export default class PartySmallWindowDeleteAllMutator extends IMMOClientMutator<
  GameClient,
  PartySmallWindowDeleteAll
> {
  update(packet: PartySmallWindowDeleteAll): void {
    this.Client.PartyList.clear();

    this.fire("PartySmallWindow", {
      member: null,
      action: "delete-all",
    });
  }
}
