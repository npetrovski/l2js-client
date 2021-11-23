import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import L2PartyMember from "../../../entities/L2PartyMember";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class PartySmallWindowAllMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    this.Client.PartyList.clear();
    (packet.get("members") as Record<string, unknown>[]).forEach((data) => {
      const char = new L2PartyMember();

      char.ObjectId = data.member_oid as number;
      char.Name = data.name as string;
      char.Cp = data.current_cp as number;
      char.MaxCp = data.maximum_cp as number;
      char.Hp = data.current_hp as number;
      char.MaxHp = data.maximum_hp as number;
      char.Mp = data.current_mp as number;
      char.MaxMp = data.maximum_mp as number;
      char.Level = data.level as number;
      char.ClassId = data.class as number;
      char.Race = data.race as number;
      char.IsPartyLeader = char.ObjectId === (packet.get("leader_oid") as number);
      char.IsDead = char.Hp <= 0;

      this.Client.PartyList.add(char);

      GlobalEvents.fire("PartySmallWindow", {
        member: char,
        action: "add-all",
      });
    });
  }
}
