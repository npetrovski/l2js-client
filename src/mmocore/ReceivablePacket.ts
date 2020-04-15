import AbstractPacket from "./AbstractPacket";
import MMOClient from "./MMOClient";

export default abstract class ReceivablePacket<T extends MMOClient<any>> extends AbstractPacket<T> {
  _buffer!: Uint8Array;
  _offset: number = 0;
  _view!: DataView;

  set Buffer(buffer: Uint8Array) {
    this._buffer = buffer;
    this._view = new DataView(this._buffer.buffer);
  }

  abstract run(): void;

  abstract read(): boolean;

  readD(): number {
    let value = this._view.getInt32(this._offset, true);
    this._offset += 4;
    return value;
  }

  readH(): number {
    let value = this._view.getUint16(this._offset, true);
    this._offset += 2;
    return value;
  }

  readC(): number {
    let value = this._view.getUint8(this._offset);
    this._offset += 1;
    return value;
  }

  readF(): number {
    let value = this._view.getFloat64(this._offset, true);
    this._offset += 8;
    return value;
  }

  readQ(): number {
    var lo = this._view.getUint32(this._offset, true),
      hi = this._view.getUint32(this._offset + 4, true);
    this._offset += 8;
    return lo + this.pow2(32) * hi;
  }

  readS(): string {
    var result = "";
    for (let i = this._offset; i < this._buffer.byteLength - 1; i += 2) {
      let c = this._view.getUint16(i, true);
      this._offset += 2;
      if (c === 0) break;
      result += String.fromCharCode(c);
    }
    return result;
  }

  readB(length: number): Uint8Array {
    let value = this._buffer.slice(this._offset, this._offset + length);
    this._offset += length;
    return Uint8Array.from(value);
  }

  readLoc(): number[] {
    let _x = this.readD();
    let _y = this.readD();
    let _z = this.readD();
    return [_x, _y, _z];
  }
}
