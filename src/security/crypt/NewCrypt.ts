import BlowfishEngine from "./BlowfishEngine";

export default class NewCrypt {
  private _cipher: BlowfishEngine;

  constructor(blowfishKey: Uint8Array) {
    this._cipher = new BlowfishEngine();
    this._cipher.init(blowfishKey);
  }

  static verifyChecksum(raw: Uint8Array, offset?: number, size?: number): boolean {
    offset = offset ?? 0;
    size = size ?? raw.byteLength;
    if ((size & 3) != 0 || size <= 4) {
      return false;
    }

    var chksum: number = 0;
    var count: number = size - 4;
    var check: number = Number.MAX_VALUE;
    for (var i = offset; i < count; i += 4) {
      check = raw[i] & 0xff;
      check |= (raw[i + 1] << 8) & 0xff00;
      check |= (raw[i + 2] << 0x10) & 0xff0000;
      check |= (raw[i + 3] << 0x18) & 0xff000000;

      chksum ^= check;
    }

    chksum = chksum >>> 0;
    check = raw[i] & 0xff;
    check |= (raw[i + 1] << 8) & 0xff00;
    check |= (raw[i + 2] << 0x10) & 0xff0000;
    check |= (raw[i + 3] << 0x18) & 0xff000000;

    return check == chksum;
  }

  static appendChecksum(raw: Uint8Array, offset: number, size: number) {
    var chksum: number = 0;
    var ecx: number;

    for (var i = offset; i < size - 4; i += 4) {
      ecx = raw[i] & 0xff;
      ecx |= (raw[i + 1] << 8) & 0xff00;
      ecx |= (raw[i + 2] << 0x10) & 0xff0000;
      ecx |= (raw[i + 3] << 0x18) & 0xff000000;

      chksum ^= ecx;
    }

    ecx = raw[i] & 0xff;
    ecx |= (raw[i + 1] << 8) & 0xff00;
    ecx |= (raw[i + 2] << 0x10) & 0xff0000;
    ecx |= (raw[i + 3] << 0x18) & 0xff000000;

    chksum = chksum >>> 0;
    raw[i] = chksum & 0xff;
    raw[i + 1] = (chksum >>> 0x08) & 0xff;
    raw[i + 2] = (chksum >>> 0x10) & 0xff;
    raw[i + 3] = (chksum >>> 0x18) & 0xff;
  }

  static decXORPass(raw: Uint8Array, offset: number, size: number, key: number) {
    var stop: number = 4 + offset;
    var pos: number = size - 12;
    var edx: number;
    var ecx: number = key;
    while (stop <= pos) {
      edx = raw[pos] & 0xff;
      edx |= (raw[pos + 1] & 0xff) << 8;
      edx |= (raw[pos + 2] & 0xff) << 16;
      edx |= (raw[pos + 3] & 0xff) << 24;

      edx ^= ecx;

      ecx -= edx;

      raw[pos] = edx & 0xff;
      raw[pos + 1] = (edx >>> 8) & 0xff;
      raw[pos + 2] = (edx >>> 16) & 0xff;
      raw[pos + 3] = (edx >>> 24) & 0xff;
      pos -= 4;
    }
  }

  decrypt(raw: Uint8Array, offset: number, size: number): void {
    for (let i = 0; i < offset + size; i += BlowfishEngine.BLOCK_SIZE) {
      this._cipher.decryptBlock(raw, offset + i, raw, offset + i);
    }
  }

  crypt(raw: Uint8Array, offset: number, size: number): void {
    for (let i = 0; i < offset + size; i += BlowfishEngine.BLOCK_SIZE) {
      this._cipher.encryptBlock(raw, offset + i, raw, offset + i);
    }
  }
}
