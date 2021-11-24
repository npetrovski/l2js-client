import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import PartySmallWindowDelete from "../../incoming/game/PartySmallWindowDelete";


export default class PartySmallWindowDeleteMutator extends IMMOClientMutator<
  GameClient,
  PartySmallWindowDelete
> {
  update(packet: PartySmallWindowDelete): void {
    const char = this.Client.PartyList.getEntryByObjectId(packet.MemberObjId);
    if (char) {
      this.fire("PartySmallWindow", { member: char, action: "delete" });
    }
    this.Client.PartyList.removeByObjectId(packet.MemberObjId);
  }
}
