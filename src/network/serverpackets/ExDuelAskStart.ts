import GameClientPacket from "./GameClientPacket";
import { GlobalEvents } from "../../mmocore/EventEmitter";

export default class ExDuelAskStart extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _requestorName = this.readS();
    const _partyDuel = this.readD();

    GlobalEvents.fire(`RequestedDuel`, { requestorName: _requestorName });

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
