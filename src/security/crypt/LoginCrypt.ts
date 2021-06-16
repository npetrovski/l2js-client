import NewCrypt from "./NewCrypt";

export default class LoginCrypt {
  // prettier-ignore
  static readonly STATIC_BLOWFISH_KEY: Uint8Array = Uint8Array.from([0x6b, 0x60, 0xcb, 0x5b, 0x82, 0xce, 0x90, 0xb1, 0xcc, 0x2b, 0x6c, 0x55, 0x6c, 0x6c, 0x6c, 0x6c]);
  private _crypt: NewCrypt = new NewCrypt(LoginCrypt.STATIC_BLOWFISH_KEY);


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

    this._crypt.decrypt(raw, offset, size);

    return NewCrypt.verifyChecksum(raw, offset, size);
  }

  encrypt(raw: Uint8Array, offset: number, size: number): void {
    size += 8 - (size % 8);
    NewCrypt.appendChecksum(raw, offset, size - 12);
    this._crypt.crypt(raw, offset, size);

  }
}
