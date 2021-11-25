import NewCrypt from "../mmocore/crypt/NewCrypt";

export default class LoginCrypt {
  // prettier-ignore
  static readonly STATIC_BLOWFISH_KEY: Uint8Array = Uint8Array.from([
    0x6b, 0x60, 0xcb, 0x5b, 0x82, 0xce, 0x90, 0xb1,
    0xcc, 0x2b, 0x6c, 0x55, 0x6c, 0x6c, 0x6c, 0x6c
  ]);

  private _static = true;

  private _crypt = new NewCrypt(LoginCrypt.STATIC_BLOWFISH_KEY);

  setKey(key: Uint8Array): void {
    this._crypt.init(key);
  }

  decrypt(raw: Uint8Array, offset?: number, size?: number): boolean {
    offset = offset ?? 0;
    size = size ?? raw.byteLength;
    this._crypt.decrypt(raw, offset, size);

    if (this._static) {
      this._static = false;

      let rndXor = raw[size - 8] & 0xff;
      rndXor |= (raw[size - 7] << 8) & 0xff00;
      rndXor |= (raw[size - 6] << 0x10) & 0xff0000;
      rndXor |= (raw[size - 5] << 0x18) & 0xff000000;

      NewCrypt.decXORPass(raw, offset, size, rndXor);

      return true;
    } else {
      return NewCrypt.verifyChecksum(raw, offset, size);
    }
  }

  encrypt(raw: Uint8Array, offset?: number, size?: number): void {
    NewCrypt.appendChecksum(raw, offset, size);
    this._crypt.crypt(raw, offset, size);
  }
}
