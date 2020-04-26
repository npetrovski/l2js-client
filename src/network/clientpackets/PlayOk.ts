import LoginClientPacket from "./LoginClientPacket";

export default class PlayOk extends LoginClientPacket {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.Client.PlayOk1 = this.readD();
    this.Client.PlayOk2 = this.readD();

    return true;
  }

  // @Override
  run(): void {
    this.Client.Connection.close();
    if (this.Client.onSuccessCallback) {
      this.Client.onSuccessCallback();
    }
  }
}
