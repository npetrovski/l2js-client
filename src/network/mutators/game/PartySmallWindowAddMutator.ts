import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import PartySmallWindowAdd from "../../incoming/game/PartySmallWindowAdd";

export default class PartySmallWindowAddMutator extends IMMOClientMutator<
  GameClient,
  PartySmallWindowAdd
> {
  update(packet: PartySmallWindowAdd): void {
    this.Client.PartyList.add(packet.PartyMember);

    this.fire("PartySmallWindow", {
      member: packet.PartyMember,
      action: "add",
    });
  }
}
