import GameClientPacket from "./GameClientPacket";
import { GlobalEvents } from "../../mmocore/EventEmitter";
import L2Character from "../../entities/L2Character";
import Appearing from "../clientpackets/Appearing";

export default class PartySmallWindowDelete extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _memberObjId = this.readD();
    const _memberName = this.readS();

    this.Client.PartyList.removeByObjectId(_memberObjId);

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
