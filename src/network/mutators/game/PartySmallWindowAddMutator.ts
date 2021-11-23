import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";
import L2PartyMember from "../../../entities/L2PartyMember";

export default class PartySmallWindowAddMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const partyMember = new L2PartyMember();
    partyMember.ObjectId = packet.get("member_oid") as number;
    partyMember.Name = packet.get("name") as string;
    partyMember.Cp = packet.get("current_cp") as number;
    partyMember.MaxCp = packet.get("maximum_cp") as number;
    partyMember.Hp = packet.get("current_hp") as number;
    partyMember.MaxHp = packet.get("maximum_hp") as number;
    partyMember.Mp = packet.get("current_mp") as number;
    partyMember.MaxMp = packet.get("maximum_mp") as number;
    partyMember.Level = packet.get("level") as number;
    partyMember.ClassId = packet.get("class") as number;
    partyMember.IsPartyLeader = partyMember.ObjectId === (packet.get("leader_oid") as number);
    partyMember.IsDead = partyMember.Hp <= 0;

    this.Client.PartyList.add(partyMember);

    GlobalEvents.fire("PartySmallWindow", {
      member: partyMember,
      action: "add",
    });
  }
}
