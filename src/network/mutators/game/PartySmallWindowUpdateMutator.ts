import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import PartySmallWindowUpdate from "../../incoming/game/PartySmallWindowUpdate";
import L2PartyMember from "../../../entities/L2PartyMember";


export default class PartySmallWindowUpdateMutator extends IMMOClientMutator<
  GameClient,
  PartySmallWindowUpdate
> {
  update(packet: PartySmallWindowUpdate): void {

    const char = new L2PartyMember();
    char.Name = packet.PartyMember.Name;
    char.Cp = packet.PartyMember.Cp;
    char.MaxCp = packet.PartyMember.MaxCp;
    char.Hp = packet.PartyMember.Hp;
    char.MaxHp = packet.PartyMember.MaxHp;
    char.Mp = packet.PartyMember.Mp;
    char.MaxMp = packet.PartyMember.MaxMp;
    char.Level = packet.PartyMember.Level;
    char.ClassId = packet.PartyMember.ClassId;
    char.IsDead = packet.PartyMember.IsDead;
    char.ObjectId = packet.PartyMember.ObjectId;

    this.fire("PartySmallWindow", { member: char, action: "update" });
  }
}
