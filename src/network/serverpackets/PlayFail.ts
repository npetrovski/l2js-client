import LoginClientPacket from "./LoginClientPacket";
import { PlayFailReason } from "../../enums/PlayFailReason";

export default class PlayFail extends LoginClientPacket {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _reason = this.readC();

    throw Error("Play fail. Reason: " + PlayFailReason[_reason]);
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
