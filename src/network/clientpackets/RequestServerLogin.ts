import MMOSession from "../../mmocore/MMOSession";
import LoginServerPacket from "./LoginServerPacket";

export default class RequestServerLogin extends LoginServerPacket {
  _accountId = 0;
  _authKey = 0;
  _serverId = 1;

  constructor(session: MMOSession, serverId: number) {
    super();
    this._accountId = session.accountId;
    this._authKey = session.authKey;
    this._serverId = serverId;
  }

  write(): void {
    this.writeC(0x02);
    this.writeD(this._accountId);
    this.writeD(this._authKey);
    this.writeC(this._serverId);
    this.writeD(0x00); // padding
  }
}
