import LoginServerPacket from "./LoginServerPacket";
import * as constants from "constants";
import NodeRSA from "node-rsa";
import BigInteger from "../../security/crypt/BigInteger";

export default class RequestAuthLogin extends LoginServerPacket {
  static LOGIN_GG: Map<string, Uint8Array> = new Map([
    [
      "D93D53271DA5722E8B031720A31E5BC3",
      Uint8Array.from([0x7f, 0x97, 0xf0, 0x78, 0x04, 0x3c, 0xe6, 0xd6, 0x71, 0x0c, 0xf6, 0x89, 0xdd, 0x9e, 0x06, 0x70]),
    ],
    [
      "00000000000000000000000000000000",
      Uint8Array.from([0x23, 0x01, 0x00, 0x00, 0x67, 0x45, 0x00, 0x00, 0xab, 0x89, 0x00, 0x00, 0xef, 0xcd, 0x00, 0x00]),
    ],
  ]);

  write(): void {
    if (this.Client.Username.length > 14) {
      throw Error("Username is too long");
    }

    if (this.Client.Password.length > 16) {
      throw Error("Password is too long");
    }

    const loginInfo: Uint8Array = new Uint8Array(128);

    loginInfo[0x5b] = 0x24;
    for (let i = 0; i < this.Client.Username.length; i++) loginInfo[0x5e + i] = this.Client.Username.charCodeAt(i);
    for (let i = 0; i < this.Client.Password.length; i++) loginInfo[0x6c + i] = this.Client.Password.charCodeAt(i);

    const e = new BigInteger("65537", 10);
    const modulus = new BigInteger(
      Array.from(Array.from(this.Client.PublicKey), (byte) => ("0" + (byte & 0xff).toString(16)).slice(-2)).join(""),
      16
    );
    const input = new BigInteger(
      Array.from(Array.from(loginInfo), (byte) => ("0" + (byte & 0xff).toString(16)).slice(-2)).join(""),
      16
    );
    const encryptedLoginInfo: Uint8Array = Uint8Array.from(input.modPow(e, modulus).toByteArray(false));

    this.writeC(0);
    this.writeB(encryptedLoginInfo);
    this.writeD(this.Client.SessionId);

    const query: Uint8Array = new Uint8Array(16);
    query.set(this._buffer.slice(5, 21), 0);
    const gg: string = Array.from(Array.from(query), (byte) => ("0" + (byte & 0xff).toString(16)).slice(-2)).join("");

    if (RequestAuthLogin.LOGIN_GG.has(gg)) {
      this.writeB(Uint8Array.from(RequestAuthLogin.LOGIN_GG.get(gg) ?? []));
    } else {
      // prettier-ignore
      this.writeB( Uint8Array.from([0x23, 0x01, 0x00, 0x00, 0x67, 0x45, 0x00, 0x00, 0xab, 0x89, 0x00, 0x00, 0xef, 0xcd, 0x00, 0x00]));
    }

    this.writeB(Uint8Array.from([0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00])); // footer
    this.writeB(Uint8Array.from(Array(16).fill(0)));
  }
}
