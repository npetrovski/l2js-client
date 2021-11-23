import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class PartyMemberPositionMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    (packet.get("members") as Record<string, number>[]).forEach((data) => {
      const char = this.Client.PartyList.getEntryByObjectId(data.member_oid);
      if (char) {
        char.setLocation(data.location_x, data.location_y, data.location_z);
        char.calculateDistance(this.Client.ActiveChar);
        GlobalEvents.fire("PartyMemberPosition", { member: char });
      }
    });
  }
}
