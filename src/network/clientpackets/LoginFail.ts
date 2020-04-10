import LoginClientPacket from "./LoginClientPacket";
import LoginClient from "../LoginClient";
import SendablePacket from "../../mmocore/SendablePacket";
import { LoginFailReason } from "../../enums/LoginFailReason";
import RequestSecurityCard from "../serverpackets/RequestSecurityCard";

export default class LoginFail extends LoginClientPacket {
  _securityCard: boolean = false;
  //@Override
  readImpl(): boolean {
    let _id: number = this.readC();
    let _reason = this.readC();
    if (_reason === 0x1f) {
      this._securityCard = true;
    } else {
      throw Error("Login fail. Reason: " + LoginFailReason[_reason]);
    }

    return true;
  }

  //@Override
  run(): void {
    if (this._securityCard) {
      var spk: SendablePacket<LoginClient> = new RequestSecurityCard();
      this.Client.sendPacket(spk);
    }
  }
}
