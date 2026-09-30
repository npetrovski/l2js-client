import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import PartySmallWindowDeleteAll from "@network/incoming/game/x50_PartySmallWindowDeleteAll";

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
