import LoginServerPacket from "./LoginServerPacket";

export default class RequestServerLogin extends LoginServerPacket {
  _loginOk1: number = 0;
  _loginOk2: number = 0;
  _serverId: number = 1;

  constructor(loginOk1: number, loginOk2: number, serverId: number) {
    super(32);
    this._loginOk1 = loginOk1;
    this._loginOk2 = loginOk2;
    this._serverId = serverId;
  }

  write(): void {
    this.writeC(0x02);
    this.writeD(this._loginOk1);
    this.writeD(this._loginOk2);
    this.writeC(this._serverId);
  }
}
