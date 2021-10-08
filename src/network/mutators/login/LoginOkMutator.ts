import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import LoginOk from "../../incoming/login/LoginOk";
import LoginClient from "../../LoginClient";

export default class LoginOkMutator extends IMMOClientMutator<
  LoginClient,
  LoginOk
> {
  update(packet: LoginOk): void {
    this.Client.Session.loginOk1 = packet.LoginOk1;
    this.Client.Session.loginOk2 = packet.LoginOk2;
  }
}
