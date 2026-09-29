import { LoginPacket } from "../../PacketRegistry";

import LoginClientPacket from "./LoginClientPacket";
import { PlayFailReason } from "../../../enums/PlayFailReason";

@LoginPacket(0x06)
export default class x06_PlayFail extends LoginClientPacket {
  public FailReason!: PlayFailReason;
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _reason = this.readC();

    this.FailReason = (PlayFailReason as any)[_reason];
    return true;
  }
}
