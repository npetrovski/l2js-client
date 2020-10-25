import LoginClientPacket from "./LoginClientPacket";
import { GlobalEvents } from "../../mmocore/EventEmitter";

export default class PlayOk extends LoginClientPacket {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.Client.PlayOk1 = this.readD();
    this.Client.PlayOk2 = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
