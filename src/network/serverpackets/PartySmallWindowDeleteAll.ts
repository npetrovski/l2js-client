import { GlobalEvents } from "../../mmocore/EventEmitter";
import GameClientPacket from "./GameClientPacket";

export default class PartySmallWindowDeleteAll extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.Client.PartyList.clear();

    GlobalEvents.fire("PartySmallWindow", { member: null, action: "delete-all" });

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
