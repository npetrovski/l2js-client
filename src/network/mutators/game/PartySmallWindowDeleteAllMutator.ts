import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class PartySmallWindowDeleteAllMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    this.Client.PartyList.clear();

    GlobalEvents.fire("PartySmallWindow", {
      member: null,
      action: "delete-all",
    });
  }
}
