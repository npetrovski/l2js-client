import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import PartySmallWindowDeleteAll from "../../incoming/game/PartySmallWindowDeleteAll";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class PartySmallWindowDeleteAllMutator extends IMMOClientMutator<
  GameClient,
  PartySmallWindowDeleteAll
> {
  update(packet: PartySmallWindowDeleteAll): void {
    this.Client.PartyList.clear();

    GlobalEvents.fire("PartySmallWindow", {
      member: null,
      action: "delete-all"
    });
  }
}
