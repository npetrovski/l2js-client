import LoginClientPacket from "./LoginClientPacket";

export default class PlayOk extends LoginClientPacket {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.Client.Session.gsSessionId = this.readD();
    this.Client.Session.gsAccountId = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
