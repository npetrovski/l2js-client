import GameClientPacket from "./GameClientPacket";
import { GlobalEvents } from "../../mmocore/EventEmitter";

export default class AskJoinParty extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _invitorObjId = this.readD();

    GlobalEvents.fire(`PartyRequest`, { invitorObjId: _invitorObjId });
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
