import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import PartyMemberPosition from "../../incoming/game/PartyMemberPosition";

export default class PartyMemberPositionMutator extends IMMOClientMutator<
  GameClient,
  PartyMemberPosition
> {
  update(packet: PartyMemberPosition): void {
    Object.keys(packet.Members).forEach((k) => {
      const objId: number = parseInt(k, 10);
      const char = this.Client.PartyList.getEntryByObjectId(objId);
      if (char) {
        const [_x, _y, _z] = packet.Members[objId];
        char.setLocation(_x, _y, _z);
        char.calculateDistance(this.Client.ActiveChar);
        this.fire("PartyMemberPosition", { member: char });
      }
    });
  }
}
