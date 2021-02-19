import GameClientPacket from "./GameClientPacket";
import { GlobalEvents } from "../../mmocore/EventEmitter";

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

      GlobalEvents.fire("PartySmallWindow", { member: char, action: "update" });
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
