import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import PartySmallWindowDelete from "@network/incoming/game/x51_PartySmallWindowDelete";

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
