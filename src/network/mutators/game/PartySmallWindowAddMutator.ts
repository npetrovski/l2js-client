import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import PartySmallWindowAdd from "@network/incoming/game/x4F_PartySmallWindowAdd";

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
