import AbstractPacket from "./AbstractPacket";
import MMOClient from "./MMOClient";

export default abstract class SendablePacket<T extends MMOClient> extends AbstractPacket<T> {
  static readonly PACKET_MAX_SIZE: number = 4096;
  _buffer: Uint8Array = new Uint8Array(SendablePacket.PACKET_MAX_SIZE);
  _offset = 0;
  _view: DataView = new DataView(this._buffer.buffer);

  get Buffer(): Uint8Array {
    return this._buffer;
  }

  get Position(): number {
    return this._offset;
  }

  set Position(n: number) {
    this._offset = n;
  }

  abstract write(): void;

  writeD(val: number): this {
    this._view.setInt32(this._offset, val, true);
    this._offset += 4;
    return this;
  }

  writeH(val: number): this {
    this._view.setInt16(this._offset, val, true);
    this._offset += 2;
    return this;
  }

  writeC(val: number): this {
    this._view.setInt8(this._offset, val);
    this._offset += 1;
    return this;
  }

  writeF(val: number): this {
    this._view.setFloat64(this._offset, val);
    this._offset += 1;
    return this;
  }

  writeQ(val: number): this {
    const hi = Math.floor(val / this.pow2(32));
    const lo = val - hi * this.pow2(32);

    this._view.setUint32(this._offset, lo, true);
    this._view.setUint32(this._offset + 4, hi, true);
    this._offset += 8;
    return this;
  }

  writeS(txt: string): this {
    if (txt.length > 0) {
      for (let i = 0; i < txt.length; ++i) {
        const c = txt.charCodeAt(i);
        this.writeC(c & 0xff);
        this.writeC((c & 0xff00) >>> 8);
      }
      this.writeH(0);
    }
    return this;
  }

  writeB(buf: Uint8Array): this {
    this._buffer.set(buf, this._offset);
    this._offset += buf.byteLength;
    return this;
  }
}
