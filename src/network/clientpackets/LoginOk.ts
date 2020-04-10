import LoginClientPacket from "./LoginClientPacket";
import LoginClient from "../LoginClient";
import SendablePacket from "../../mmocore/SendablePacket";
import RequestCharacters from "../serverpackets/RequestCharacters";

export default class LoginOk extends LoginClientPacket {
  _loginOk1: number = 0;

  _loginOk2: number = 0;

  //@Override
  readImpl(): boolean {
    let _id: number = this.readC();
    this._loginOk1 = this.readD();
    this._loginOk2 = this.readD();

    this.Client.LoginOk1 = this._loginOk1;
    this.Client.LoginOk2 = this._loginOk2;
    return true;
  }

  //@Override
  run(): void {
    var spk: SendablePacket<LoginClient> = new RequestCharacters(this.Client.LoginOk1, this.Client.LoginOk2);
    this.Client.sendPacket(spk);
  }
}
