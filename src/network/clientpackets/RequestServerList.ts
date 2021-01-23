import MMOSession from "../../mmocore/MMOSession";
import LoginServerPacket from "./LoginServerPacket";

export default class RequestServerList extends LoginServerPacket {
  _loginOk1 = 0;
  _loginOk2 = 0;

  constructor(session: MMOSession) {
    super();
    this._loginOk1 = session.loginOk1;
    this._loginOk2 = session.loginOk2;
  }

  write(): void {
    this.writeC(0x05);
    this.writeD(this._loginOk1);
    this.writeD(this._loginOk2);
    this.writeB(Uint8Array.from([0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]));
    this.writeB(Uint8Array.from(Array(16).fill(0)));
  }
}
