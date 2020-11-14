import Logger from "../../mmocore/Logger";
import MMOSession from "../../mmocore/MMOSession";
import BigInteger from "../../security/crypt/BigInteger";
import LoginServerPacket from "./LoginServerPacket";

export default class RequestAuthLogin extends LoginServerPacket {

  private _username!: string;
  private _password!: string;
  private _session!: MMOSession;

  constructor(username: string, password: string, session: MMOSession) {
    super();
    this._username = username;
    this._password = password;
    this._session = session;
  }

  write(): void {
    if (this._username.length > 14) {
      throw Error("Username is too long");
    }

    if (this._password.length > 16) {
      throw Error("Password is too long");
    }

    const loginInfo: Uint8Array = new Uint8Array(30);

    [...this._username].forEach((k, i) => loginInfo[0 + i] = k.charCodeAt(0));
    [...this._password].forEach((k, i) => loginInfo[14 + i] = k.charCodeAt(0));


    this.writeC(0);
    this.writeB(loginInfo);
    this.writeC(0x08); // end of user/pass section
    this.writeD(0);
    this.writeD(0);
  }

}
