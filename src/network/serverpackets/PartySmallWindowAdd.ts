import GameClientPacket from "./GameClientPacket";
import L2PartyMember from "../../entities/L2PartyMember";

export default class PartySmallWindowAdd extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _leaderObjectId = this.readD();
    const _distributionType = this.readD();

    const char = new L2PartyMember();
    char.ObjectId = this.readD();
    char.Name = this.readS();
    char.Cp = this.readD();
    char.MaxCp = this.readD();
    char.Hp = this.readD();
    char.MaxHp = this.readD();
    char.Mp = this.readD();
    char.MaxMp = this.readD();
    char.Level = this.readD();
    char.ClassId = this.readD();
    char.IsPartyLeader = char.ObjectId === _leaderObjectId;

    const _pad1 = this.readD();
    const _pad2 = this.readD();

    this.Client.PartyList.add(char);

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
