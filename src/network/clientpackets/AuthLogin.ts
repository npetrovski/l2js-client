import GameServerPacket from "./GameServerPacket";

export default class AuthLogin extends GameServerPacket {
  private _username: string;
  private _playKey1: number;
  private _playKey2: number;
  private _loginKey1: number;
  private _loginKey2: number;
  constructor(username: string, playKey1: number, playKey2: number, loginKey1: number, loginKey2: number) {
    super();
    this._username = username;
    this._playKey1 = playKey1;
    this._playKey2 = playKey2;
    this._loginKey1 = loginKey1;
    this._loginKey2 = loginKey2;
  }

  write(): void {
    this.writeC(0x2b);
    this.writeS(this._username);
    this.writeD(this._playKey2);
    this.writeD(this._playKey1);
    this.writeD(this._loginKey1);
    this.writeD(this._loginKey2);

    this.writeD(1);
    this.writeB(Uint8Array.from([0x3c, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00])); // CT2_6
  }
}
