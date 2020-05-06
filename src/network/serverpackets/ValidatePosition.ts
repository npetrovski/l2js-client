import GameServerPacket from "./GameServerPacket";

export default class ValidatePosition extends GameServerPacket {
  private _x: number;
  private _y: number;
  private _z: number;
  private _heading: number;
  private _data: number;

  constructor(x: number, y: number, z: number, heading: number, data: number) {
    super();
    this._x = x;
    this._y = y;
    this._z = z;
    this._heading = heading;
    this._data = data; // vehicle id
  }

  write(): void {
    this.writeC(0x59);
    this.writeD(this._x);
    this.writeD(this._y);
    this.writeD(this._z);
    this.writeD(this._heading);
    this.writeD(this._data);
  }
}
