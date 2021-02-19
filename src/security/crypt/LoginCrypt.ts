import NewCrypt from "./NewCrypt";

export default class LoginCrypt {
  // prettier-ignore
  static readonly STATIC_BLOWFISH_KEY: Uint8Array = Uint8Array.from(
    [0x5b, 0x3b, 0x27, 0x2e, 0x5d, 0x39, 0x34, 0x2d, 0x33, 0x31, 0x3d, 0x3d, 0x2d, 0x25, 0x26, 0x40, 0x21, 0x5e, 0x2b, 0x5d, 0x00]
  );
  private _crypt: NewCrypt = new NewCrypt(LoginCrypt.STATIC_BLOWFISH_KEY);

  private _isInit = true;

  setKey(key: Uint8Array): void {
    this._crypt = new NewCrypt(key);
  }

  decrypt(raw: Uint8Array, offset: number, size: number): boolean {
    // if (size % 8 !== 0) {
    //   throw Error(`size have to be multiple of 8`);
    // }
    if (offset + size > raw.length) {
      throw Error("raw array too short for size starting from offset");
    }

    if (this._isInit) {
      this._isInit = false;
      return true;
    }

    this._crypt.decrypt(raw, offset, size);

    return NewCrypt.verifyChecksum(raw, offset, size);
  }

  encrypt(raw: Uint8Array, offset: number, size: number): void {
    size += 8 - (size % 8);
    NewCrypt.appendChecksum(raw, offset, size - 12);
    this._crypt.crypt(raw, offset, size);

  }
}
