import GameClientPacket from "./GameClientPacket";
import L2Creature from "../../../entities/L2Creature";
import L2PartyMember from "../../../entities/L2PartyMember";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class PartySmallWindowDelete extends GameClientPacket {
  MemberObjId!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.MemberObjId = this.readD();
    const _memberName = this.readS();

    return true;
  }
}
