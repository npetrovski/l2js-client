import MMOSession from "../../mmocore/MMOSession";
import LoginServerPacket from "./LoginServerPacket";

export default class RequestServerLogin extends LoginServerPacket {
  _loginOk1 = 0;
  _loginOk2 = 0;
  _serverId = 1;

  constructor(session: MMOSession, serverId: number) {
    super();
    this._loginOk1 = session.loginOk1;
    this._loginOk2 = session.loginOk2;
    this._serverId = serverId;
  }

  write(): void {
    this.writeC(0x02);
    this.writeD(this._loginOk1);
    this.writeD(this._loginOk2);
    this.writeC(this._serverId);
    this.writeB(Uint8Array.from(Array(22).fill(0)));
  }
}
