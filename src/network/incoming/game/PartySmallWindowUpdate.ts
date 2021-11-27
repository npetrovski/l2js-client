import GameClientPacket from "./GameClientPacket";
import L2PartyMember from "../../../entities/L2PartyMember";

export default class PartySmallWindowUpdate extends GameClientPacket {
  PartyMember: L2PartyMember = new L2PartyMember();
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

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
    this.PartyMember.IsDead = this.PartyMember.Hp <= 0;

    return true;
  }
}
