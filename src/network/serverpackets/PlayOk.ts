import LoginClientPacket from "./LoginClientPacket";

export default class PlayOk extends LoginClientPacket {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.Client.Session.playOk1 = this.readD();
    this.Client.Session.playOk2 = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
