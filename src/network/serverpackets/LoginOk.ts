import RequestServerList from "../clientpackets/RequestServerList";
import LoginClientPacket from "./LoginClientPacket";

export default class LoginOk extends LoginClientPacket {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.Client.LoginOk1 = this.readD();
    this.Client.LoginOk2 = this.readD();

    return true;
  }

  // @Override
  run(): void {
    this.Client.sendPacket(new RequestServerList(this.Client.LoginOk1, this.Client.LoginOk2));
  }
}
