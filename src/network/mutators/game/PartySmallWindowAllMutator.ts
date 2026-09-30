import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import PartySmallWindowAll from "@network/incoming/game/x4E_PartySmallWindowAll";

export default class PartySmallWindowAllMutator extends IMMOClientMutator<
  GameClient,
  PartySmallWindowAll
> {
  update(packet: PartySmallWindowAll): void {
    this.Client.PartyList.clear();
    packet.PartyMembers.forEach((char) => {
      this.Client.PartyList.add(char);

      this.fire("PartySmallWindow", {
        member: char,
        action: "add-all",
      });
    });
  }
}
