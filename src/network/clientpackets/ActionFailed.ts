import { GlobalEvents } from "../../mmocore/EventEmitter";
import GameClientPacket from "./GameClientPacket";

export default class ActionFailed extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    GlobalEvents.fire("ActionFailed");

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
