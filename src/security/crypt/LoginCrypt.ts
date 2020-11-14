import NewCrypt from "./NewCrypt";

export default class LoginCrypt {
  private _isInit: boolean = true;

  // prettier-ignore
  static readonly STATIC_BLOWFISH_KEY: Uint8Array = Uint8Array.from(
    [0x5F, 0x3B, 0x35, 0x2E, 0x5D, 0x39, 0x34, 0x2D, 0x33, 0x31, 0x3D, 0x3D, 0x2D, 0x25, 0x78, 0x54, 0x21, 0x5E, 0x5B, 0x24, 0x00]
  );
  private _crypt: NewCrypt = new NewCrypt(LoginCrypt.STATIC_BLOWFISH_KEY);


  setKey(key: Uint8Array) {
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
