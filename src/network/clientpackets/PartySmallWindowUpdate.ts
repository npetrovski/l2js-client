import GameClientPacket from "./GameClientPacket";
import L2PartyMember from "../../entities/L2PartyMember";

export default class PartySmallWindowUpdate extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _objId = this.readD();

    const char = this.Client.PartyList.getEntryByObjectId(_objId);

    if (char) {
      char.Name = this.readS();
      char.Cp = this.readD();
      char.MaxCp = this.readD();
      char.Hp = this.readD();
      char.MaxHp = this.readD();
      char.Mp = this.readD();
      char.MaxMp = this.readD();
      char.Level = this.readD();
      char.ClassId = this.readD();
      char.IsDead = char.Hp === 0;
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
