import LoginServerPacket from "./LoginServerPacket";

export default class RequestCharacters extends LoginServerPacket {
  _loginOk1: number = 0;
  _loginOk2: number = 0;

  constructor(loginOk1: number, loginOk2: number) {
    super(32);
    this._loginOk1 = loginOk1;
    this._loginOk2 = loginOk2;
  }

  write(): void {
    this.writeC(0x05);
    this.writeD(this._loginOk1);
    this.writeD(this._loginOk2);
    this.writeB(Uint8Array.from([0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]));
  }
}
