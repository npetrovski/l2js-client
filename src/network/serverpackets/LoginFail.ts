import LoginClientPacket from "./LoginClientPacket";
import LoginClient from "../LoginClient";
import SendablePacket from "../../mmocore/SendablePacket";
import { LoginFailReason } from "../../enums/LoginFailReason";
import RequestSecurityCard from "../clientpackets/RequestSecurityCard";

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

  // @Override
  run(): void {
    if (this._securityCard) {
      const spk: SendablePacket<LoginClient> = new RequestSecurityCard();
      this.Client.sendPacket(spk);
    }
  }
}
