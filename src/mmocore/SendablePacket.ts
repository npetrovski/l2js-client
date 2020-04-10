import BlowfishEngine from "../security/crypt/BlowfishEngine";
import AbstractPacket from "./AbstractPacket";
import MMOClient from "./MMOClient";

export default abstract class SendablePacket<T extends MMOClient<any>> extends AbstractPacket<T> {
  _buffer: Uint8Array;
  _offset: number = 0;
  _view: DataView;

  constructor(size: number) {
    super();
    //this._buffer = new Uint8Array(size + 4 + ((size + 4) % 8));
    //this._buffer.fill(0, size);
    this._buffer = new Uint8Array(size);
    this._view = new DataView(this._buffer.buffer);
  }

  get Buffer(): Uint8Array {
    return this._buffer;
  }

  get Position(): number {
    return this._offset;
  }

  set Position(n: number) {
    this._offset = n;
  }

  writeD(val: number) {
    this._view.setInt32(this._offset, val, true);
    this._offset += 4;
    return this;
  }

  writeH(val: number) {
    this._view.setInt16(this._offset, val, true);
    this._offset += 2;
    return this;
  }

  writeC(val: number) {
    this._view.setInt8(this._offset, val);
    this._offset += 1;
    return this;
  }

  writeF(val: number) {
    this._view.setFloat64(this._offset, val);
    this._offset += 1;
    return this;
  }

  writeQ(val: number) {
    let hi = Math.floor(val / this.pow2(32)),
      lo = val - hi * this.pow2(32);

    this._view.setUint32(this._offset, lo, true);
    this._view.setUint32(this._offset + 4, hi, true);
    this._offset += 8;
    return this;
  }

  writeS(txt: string) {
    if (txt.length > 0) {
      for (var i = 0; i < txt.length; ++i) {
        let c = txt.charCodeAt(i);
        this.writeC(c & 0xff);
        this.writeC((c & 0xff00) >>> 8);
      }
      this.writeH(0);
    }
    return this;
  }

  writeB(buf: Uint8Array) {
    this._buffer.set(buf, this._offset);
    this._offset += buf.length;
    return this;
  }

  abstract write(): void;
}
