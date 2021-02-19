import LoginClientPacket from "./LoginClientPacket";

export default class LoginOk extends LoginClientPacket {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.Client.Session.accountId = this.readD();
    this.Client.Session.authKey = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
