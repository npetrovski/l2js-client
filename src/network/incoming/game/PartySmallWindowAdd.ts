import GameClientPacket from "./GameClientPacket";
import L2PartyMember from "../../../entities/L2PartyMember";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class PartySmallWindowAdd extends GameClientPacket {
  PartyMember!: L2PartyMember;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _leaderObjectId = this.readD();
    const _distributionType = this.readD();

    this.PartyMember = new L2PartyMember();
    this.PartyMember.ObjectId = this.readD();
    this.PartyMember.Name = this.readS();
    this.PartyMember.Cp = this.readD();
    this.PartyMember.MaxCp = this.readD();
    this.PartyMember.Hp = this.readD();
    this.PartyMember.MaxHp = this.readD();
    this.PartyMember.Mp = this.readD();
    this.PartyMember.MaxMp = this.readD();
    this.PartyMember.Level = this.readD();
    this.PartyMember.ClassId = this.readD();
    this.PartyMember.IsPartyLeader =
      this.PartyMember.ObjectId === _leaderObjectId;
    this.PartyMember.IsDead = this.PartyMember.Hp <= 0;

    const _pad1 = this.readD();
    const _pad2 = this.readD();

    return true;
  }
}
