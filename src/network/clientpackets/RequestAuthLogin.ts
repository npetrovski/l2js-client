import LoginServerPacket from "./LoginServerPacket";

export default class RequestAuthLogin extends LoginServerPacket {
  private _username!: string;
  private _password!: string;

  constructor(username: string, password: string) {
    super();
    this._username = username;
    this._password = password;
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
    this.writeD(0x08); // end of user/pass section
    this.writeH(0);
    this.writeC(0);
    this.writeH(0); // padding
  }

}
