import AbstractNpcInfo from "./AbstractNpcInfo";
import { GlobalEvents } from "../../mmocore/EventEmitter";

export default class ActionFail extends AbstractNpcInfo {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();

    GlobalEvents.fire("ActionFailed");
    
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
