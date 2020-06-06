import GameClientPacket from "./GameClientPacket";
import { GlobalEvents } from "../../mmocore/EventEmitter";
import L2Character from "../../entities/L2Character";
import L2PartyMember from "../../entities/L2PartyMember";

export default class PartySmallWindowAll extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _leaderObjectId = this.readD();
    const _distributionType = this.readD();
    const _memberCount = this.readD();

    this.Client.PartyList.clear();

    for (let i = 0; i < _memberCount; i++) {
      const _objectId = this.readD();
      const char = new L2PartyMember();

      char.ObjectId = _objectId;
      char.Name = this.readS();
      char.Cp = this.readD();
      char.MaxCp = this.readD();
      char.Hp = this.readD();
      char.MaxHp = this.readD();
      char.Mp = this.readD();
      char.MaxMp = this.readD();
      char.Level = this.readD();
      char.ClassId = this.readD();
      const _pad1 = this.readD();
      char.Race = this.readD();

      const _pad2 = this.readD();
      const _pad3 = this.readD();

      const _summonObjId = this.readD();
      if (_summonObjId > 0) {
        const _summonId = this.readD();
        const _summonType = this.readD();
        const _summonName = this.readS();
        const _summonHp = this.readD();
        const _summonMaxHp = this.readD();
        const _summonMp = this.readD();
        const _summonMaxMp = this.readD();
        const _summonLevel = this.readD();
      }
      char.IsPartyLeader = char.ObjectId === _leaderObjectId;

      this.Client.PartyList.add(char);
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
