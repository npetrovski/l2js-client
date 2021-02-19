import MMOSession from "../../mmocore/MMOSession";
import LoginServerPacket from "./LoginServerPacket";

export default class RequestServerList extends LoginServerPacket {
  _authKey = 0;
  _accountId = 0;

  constructor(session: MMOSession) {
    super();
    this._accountId = session.accountId;
    this._authKey = session.authKey;
  }

  write(): void {
    this.writeC(0x05);
    this.writeD(this._accountId);
    this.writeD(this._authKey);
    this.writeC(0x03); // List type (C1)
    this.writeB(Uint8Array.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00])); // padding
  }
}
