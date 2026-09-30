import { LoginPacket } from "@network/PacketRegistry";

import LoginClientPacket from "@network/incoming/login/LoginClientPacket";
import { LoginFailReason } from "@enums/LoginFailReason";

@LoginPacket(0x01)
export default class x01_LoginFail extends LoginClientPacket {
  _securityCard = false;

  public FailReason!: LoginFailReason;

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _reason = this.readC();
    if (_reason === 0x1f) {
      this._securityCard = true;
    } else {
      this.FailReason = (LoginFailReason as any)[_reason];
    }

    return true;
  }
}
