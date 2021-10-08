import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import PartySmallWindowAdd from "../../incoming/game/PartySmallWindowAdd";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class PartySmallWindowAddMutator extends IMMOClientMutator<
  GameClient,
  PartySmallWindowAdd
> {
  update(packet: PartySmallWindowAdd): void {
    this.Client.PartyList.add(packet.PartyMember);

    GlobalEvents.fire("PartySmallWindow", {
      member: packet.PartyMember,
      action: "add"
    });
  }
}
