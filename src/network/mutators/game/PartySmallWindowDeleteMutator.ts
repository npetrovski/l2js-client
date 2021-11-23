import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class PartySmallWindowDeleteMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const char = this.Client.PartyList.getEntryByObjectId(packet.get("member_oid") as number);
    if (char) {
      GlobalEvents.fire("PartySmallWindow", { member: char, action: "delete" });
    }
    this.Client.PartyList.removeByObjectId(packet.get("member_oid") as number);
  }
}
