import MMOSession from "../../mmocore/MMOSession";
import GameServerPacket from "./GameServerPacket";

export default class AuthLogin extends GameServerPacket {
  private _session: MMOSession;

  constructor(session: MMOSession) {
    super();
    this._session = session;
  }

  write(): void {
    this.writeC(0x08);
    this.writeS(this._session.username);
    this.writeD(this._session.playOk2);
    this.writeD(this._session.playOk1);
    this.writeD(this._session.loginOk1);
    this.writeD(this._session.loginOk2);

    this.writeD(1);
    //this.writeB(Uint8Array.from([0x3c, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00])); // CT2_6
  }
}
