import { GlobalEvents } from "../../mmocore/EventEmitter";
import AbstractMessagePacket from "./AbstractMessagePacket";

export default class SystemMessage extends AbstractMessagePacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.readMe();



    GlobalEvents.fire("SystemMessage", { messageId: this.messageId, params: this.messageParams });
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
