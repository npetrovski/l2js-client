import GameClientPacket from "./GameClientPacket";
import L2PartyMember from "../../entities/L2PartyMember";
import { GlobalEvents } from "../../mmocore/EventEmitter";

export default class PledgeShowMemberListAll extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _clanId = this.readD();
    const _clanName = this.readS();
    const _leaderName = this.readS();
    const _crestId = this.readD();
    const _clanLevel = this.readD();
    const _hasCastle = this.readD() === 1;
    const _hasHideout = this.readD() === 1;
    const _rank = this.readD();
    const _reputation = this.readD();
    const _status = this.readD();
    const _unk0 = this.readD();
    const _memberCount = this.readD();



    for (let i = 0; i < _memberCount; i++) {
      const _memberName = this.readS();
      const _memberLevel = this.readD();
      const _memberClass = this.readD();
      const _memberSex = this.readD();
      const _memberRace = this.readD();
      const _memberOnline = this.readD() === 1;
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
