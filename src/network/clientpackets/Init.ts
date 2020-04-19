import LoginClientPacket from "./LoginClientPacket";
import LoginClient from "../LoginClient";
import AuthGameGuard from "../serverpackets/AuthGameGuard";
import NewCrypt from "../../security/crypt/NewCrypt";
import SendablePacket from "../../mmocore/SendablePacket";

export default class Init extends LoginClientPacket {
  _sessionId: number = 0;

  _protocolVersion: number = 0;

  _publicKey: Uint8Array = new Uint8Array();

  _blowfishKey: Uint8Array = new Uint8Array();

  get SessionId(): number {
    return this._sessionId;
  }

  get PublicKey(): Uint8Array {
    return this._publicKey;
  }

  get BlowfishKey(): Uint8Array {
    return this._blowfishKey;
  }

  get ProtocolVersion(): number {
    return this._protocolVersion;
  }

  // @Override
  readImpl(): boolean {
    const checkNum: number = new DataView(
      this._buffer.slice(this._buffer.length - 8, this._buffer.length - 4).buffer
    ).getUint32(0, true);

    NewCrypt.decXORPass(this._buffer, 0, this._buffer.length, checkNum);

    const _id: number = this.readC();
    this._sessionId = this.readD();
    this._protocolVersion = this.readD();
    this._publicKey = this.unscrambleModulus(this.readB(128));

    // unk GG related?
    const _unkn1 = this.readD();
    const _unkn2 = this.readD();
    const _unkn3 = this.readD();
    const _unkn4 = this.readD();

    this._blowfishKey = this.readB(16);

    this.Client.SessionId = this._sessionId;
    this.Client.BlowfishKey = this._blowfishKey;
    this.Client.PublicKey = this._publicKey;
    return true;
  }

  // @Override
  run(): void {
    let spk: SendablePacket<LoginClient> = new AuthGameGuard(this.Client.SessionId);
    this.Client.sendPacket(spk);
  }

  private unscrambleModulus(mods: Uint8Array): Uint8Array {
    for (let i = 0; i < 0x40; i++) {
      mods[0x40 + i] = mods[0x40 + i] ^ mods[i];
    }
    // step 3 : xor bytes 0x0d-0x10 with bytes 0x34-0x38
    for (let i = 0; i < 4; i++) {
      mods[0x0d + i] = mods[0x0d + i] ^ mods[0x34 + i];
    }
    // step 2 : xor first 0x40 bytes with  last 0x40 bytes
    for (let i = 0; i < 0x40; i++) {
      mods[i] = mods[i] ^ mods[0x40 + i];
    }
    // step 1 : 0x4d-0x50 <-> 0x00-0x04
    for (let i = 0; i < 4; i++) {
      const temp: number = mods[0x00 + i];
      mods[0x00 + i] = mods[0x4d + i];
      mods[0x4d + i] = temp;
    }

    return mods;
  }
}
