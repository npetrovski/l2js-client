import AbstractPacket from "./AbstractPacket";
import MMOClient from "./MMOClient";

export default abstract class ReceivablePacket<T extends MMOClient> extends AbstractPacket<T> {
  _buffer!: Uint8Array;
  _offset = 0;
  _view!: DataView;

  set Buffer(buffer: Uint8Array) {
    this._buffer = buffer;
    this._view = new DataView(this._buffer.buffer);
  }

  abstract run(): void;

  abstract read(): boolean;

  readD(): number {
    const value = this._view.getInt32(this._offset, true);
    this._offset += 4;
    return value;
  }

  readH(): number {
    const value = this._view.getUint16(this._offset, true);
    this._offset += 2;
    return value;
  }

  readC(): number {
    const value = this._view.getUint8(this._offset);
    this._offset += 1;
    return value;
  }

  readF(): number {
    const value = this._view.getFloat64(this._offset, true);
    this._offset += 8;
    return value;
  }

  readQ(): number {
    const lo = this._view.getUint32(this._offset, true);
    const hi = this._view.getUint32(this._offset + 4, true);
    this._offset += 8;
    return lo + this.pow2(32) * hi;
  }

  readS(): string {
    let result = "";
    for (let i = this._offset; i < this._buffer.byteLength - 1; i += 2) {
      const c = this._view.getUint16(i, true);
      this._offset += 2;
      if (c === 0) break;
      result += String.fromCharCode(c);
    }
    return result;
  }

  readB(length: number): Uint8Array {
    const value = this._buffer.slice(this._offset, this._offset + length);
    this._offset += length;
    return Uint8Array.from(value);
  }

  readLoc(): number[] {
    return [this.readD(), this.readD(), this.readD()]; // X, Y, Z
  }
}
