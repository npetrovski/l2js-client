import GameClientPacket from "./GameClientPacket";
import L2Creature from "../../entities/L2Creature";
import L2PartyMember from "../../entities/L2PartyMember";
import { GlobalEvents } from "../../mmocore/EventEmitter";

export default class PartySmallWindowDelete extends GameClientPacket {
  public creature!: L2Creature;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _memberObjId = this.readD();
    const _memberName = this.readS();

    const char: L2PartyMember | undefined = this.Client.PartyList.getEntryByObjectId(_memberObjId);
    if (char) {
      GlobalEvents.fire("PartySmallWindow", { member: char, action: "delete" });
    }
    this.Client.PartyList.removeByObjectId(_memberObjId);

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
