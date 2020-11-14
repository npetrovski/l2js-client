import LoginClientPacket from "./LoginClientPacket";

export default class Init extends LoginClientPacket {
  // @Override
  readImpl(): boolean {

    const _id: number = this.readC();
    this.Client.Session.sessionId = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }

}
