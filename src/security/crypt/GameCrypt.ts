export default class GameCrypt {
  public static BLOCK_SIZE = 128;
  private _inKey!: Uint8Array;
  private _outKey!: Uint8Array;
  private _istEnabled = false;

  setKey(key: number): void {
    const xorKey = Uint8Array.from([
      (key >> 0 & 0xff), (key >> 8 & 0xff), (key >> 16 & 0xff), (key >> 24 & 0xff), 0xa1, 0x6c, 0x54, 0x87
    ]);
    this._inKey = Uint8Array.from(xorKey);
    this._outKey = Uint8Array.from(xorKey);
  }

  decrypt(raw: Uint8Array, offset: number, size: number): void {
    if (!this._istEnabled) {
      this._istEnabled = true;
      return;
    }

    let temp = 0;
    for (let i = 0; i < size; i++) {
      const temp2 = raw[offset + i];
      raw[offset + i] = temp2 ^ this._inKey[i & 7] ^ temp;
      temp = temp2;
    }

    let old = this._inKey[0] & 0xff;
    old |= (this._inKey[1] << 8) & 0xff00;
    old |= (this._inKey[2] << 0x10) & 0xff0000;
    old |= (this._inKey[3] << 0x18) & 0xff000000;

    old += size;

    this._inKey[0] = old & 0xff;
    this._inKey[1] = (old >> 0x08) & 0xff;
    this._inKey[2] = (old >> 0x10) & 0xff;
    this._inKey[3] = (old >> 0x18) & 0xff;
  }

  encrypt(raw: Uint8Array, offset: number, size: number): void {
    if (!this._istEnabled) {
      return;
    }

    let temp = 0;
    for (let i = 0; i < size; i++) {
      const temp2 = raw[offset + i] & 0xff;
      temp = temp2 ^ this._outKey[i & 7] ^ temp;
      raw[offset + i] = temp & 0xff;
    }

    let old = this._outKey[0] & 0xff;
    old |= (this._outKey[1] << 8) & 0xff00;
    old |= (this._outKey[2] << 0x10) & 0xff0000;
    old |= (this._outKey[3] << 0x18) & 0xff000000;

    old += size;

    this._outKey[0] = old & 0xff;
    this._outKey[1] = (old >> 0x08) & 0xff;
    this._outKey[2] = (old >> 0x10) & 0xff;
    this._outKey[3] = (old >> 0x18) & 0xff;
  }
}
