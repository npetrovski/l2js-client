import RequestServerList from "../clientpackets/RequestServerList";
import LoginClientPacket from "./LoginClientPacket";

export default class LoginOk extends LoginClientPacket {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.Client.Session.loginOk1 = this.readD();
    this.Client.Session.loginOk2 = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
