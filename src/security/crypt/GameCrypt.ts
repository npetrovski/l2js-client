export default class GameCrypt {

  public static BLOCK_SIZE: number = 128;
  private _xorEncKey!: Uint8Array;
  private _xorDecKey!: Uint8Array;
  private _istEnabled: boolean = false;

  setKey(key: number) {
    const xorKey = Uint8Array.from([
      (key >> 0 & 0xff), (key >> 8 & 0xff), (key >> 16 & 0xff), (key >> 24 & 0xff), 0xa1, 0x6c, 0x54, 0x87
    ]);
    this._xorEncKey = Uint8Array.from(xorKey);
    this._xorDecKey = Uint8Array.from(xorKey);
  }

  private _updateXorKey(key: Uint8Array, len: number): Uint8Array {
    let keyPart = 0;
    keyPart |= (key[0] << 0x00) & 0x000000ff;
    keyPart |= (key[1] << 0x08) & 0x0000ff00;
    keyPart |= (key[2] << 0x10) & 0x00ff0000;
    keyPart |= (key[3] << 0x18) & 0xff000000;
    keyPart += len;
    key[0] = (keyPart >>> 0x00) & 0xff;
    key[1] = (keyPart >>> 0x08) & 0xff;
    key[2] = (keyPart >>> 0x10) & 0xff;
    key[3] = (keyPart >>> 0x18) & 0xff;
    return key;
  }

  decrypt(raw: Uint8Array, offset: number, size: number): void {
    if (!this._istEnabled) {
      this._istEnabled = true;
      return;
    }

    if (this._xorDecKey) {
      let prevByte: number = 0
      for (let i = 0; i < size; i++) {
        const tmp = raw[offset + i] & 0xff;
        raw[offset + i] ^= this._xorDecKey[i & 7] ^ prevByte;
        prevByte = tmp;
      }

      this._xorDecKey = this._updateXorKey(this._xorDecKey, size);
    }
  }

  encrypt(raw: Uint8Array, offset: number, size: number): void {
    if (!this._istEnabled) {
      return;
    }

    if (this._xorEncKey) {
      const blockCount = Math.floor(size / GameCrypt.BLOCK_SIZE + (size % GameCrypt.BLOCK_SIZE ? 1 : 0));

      let prevByte: number = 0
      for (let i = 0; i < blockCount; i++) {
        const blockSize = (i === blockCount - 1) ? size % GameCrypt.BLOCK_SIZE : GameCrypt.BLOCK_SIZE;
        for (let b = 0; b < blockSize; b++) {
          raw[offset + i * blockSize + b] ^= this._xorEncKey[b & 7] ^ prevByte;
          prevByte = raw[offset + i * blockSize + b] & 0xff;
        }
      }

      this._xorEncKey = this._updateXorKey(this._xorEncKey, size);
    }
  }
}
