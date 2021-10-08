import LoginClientPacket from "./LoginClientPacket";
import { LoginFailReason } from "../../../enums/LoginFailReason";

export default class LoginFail extends LoginClientPacket {
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

  /*
  run(): void {
    if (this._securityCard) {
      this.Client.sendPacket(new RequestSecurityCard());
    }
  }*/
}
