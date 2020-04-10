import LoginClientPacket from "./LoginClientPacket";

export default class PlayOk extends LoginClientPacket {
  _playOk1: number = 0;

  _playOk2: number = 0;

  //@Override
  readImpl(): boolean {
    let _id: number = this.readC();
    this._playOk1 = this.readD();
    this._playOk2 = this.readD();

    this.Client.PlayOk1 = this._playOk1;
    this.Client.PlayOk2 = this._playOk2;
    return true;
  }

  //@Override
  run(): void {
    this.Client.Connection.close();
    if (this.Client.onSuccessCallback) {
      this.Client.onSuccessCallback(this.Client);
    }
  }
}
