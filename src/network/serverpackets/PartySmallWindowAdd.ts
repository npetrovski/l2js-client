import GameClientPacket from "./GameClientPacket";
import L2PartyMember from "../../entities/L2PartyMember";
import { GlobalEvents } from "../../mmocore/EventEmitter";

export default class PartySmallWindowAdd extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();


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
    char.Sex = this.readD();
    char.Race = this.readD();

    this.Client.PartyList.add(char);

    GlobalEvents.fire("PartySmallWindow", { member: char, action: "add" });

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
