import GameClientPacket from "./GameClientPacket";
import L2PartyMember from "../../entities/L2PartyMember";
import { GlobalEvents } from "../../mmocore/EventEmitter";

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
    char.IsDead = char.Hp <= 0;

    const _pad1 = this.readD();
    const _pad2 = this.readD();

    this.Client.PartyList.add(char);

    GlobalEvents.fire("PartySmallWindow", { member: char, action: "add" });

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
