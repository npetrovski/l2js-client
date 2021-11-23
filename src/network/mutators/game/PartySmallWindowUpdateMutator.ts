import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class PartySmallWindowUpdateMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const char = this.Client.PartyList.getEntryByObjectId(packet.get("member_oid") as number);

    if (char) {
      char.Name = packet.get("name") as string;
      char.Cp = packet.get("current_cp") as number;
      char.MaxCp = packet.get("maximum_cp") as number;
      char.Hp = packet.get("current_hp") as number;
      char.MaxHp = packet.get("maximum_hp") as number;
      char.Mp = packet.get("current_mp") as number;
      char.MaxMp = packet.get("maximum_mp") as number;
      char.Level = packet.get("level") as number;
      char.ClassId = packet.get("class") as number;
      char.IsDead = (packet.get("current_hp") as number) <= 0;

      GlobalEvents.fire("PartySmallWindow", { member: char, action: "update" });
    }
  }
}
