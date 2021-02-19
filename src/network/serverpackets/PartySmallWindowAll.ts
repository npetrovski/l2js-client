import GameClientPacket from "./GameClientPacket";
import L2PartyMember from "../../entities/L2PartyMember";
import { GlobalEvents } from "../../mmocore/EventEmitter";

export default class PartySmallWindowAll extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

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
      char.Sex = this.readD();
      char.Race = this.readD();

      this.Client.PartyList.add(char);

      GlobalEvents.fire("PartySmallWindow", { member: char, action: "add-all" });
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
