import IPositionable from "./interfaces/IPositionable";
import ILocational from "./interfaces/ILocational";

export default class Location implements IPositionable {
  private _x!: number;
  private _y!: number;
  private _z!: number;
  private _heading!: number;
  private _instanceId!: number;

  constructor(x?: number, y?: number, z?: number, heading?: number, instanceId?: number) {
    if (x) this._x = x;
    if (y) this._y = y;
    if (z) this._z = z;
    if (heading) this._heading = heading;
    if (instanceId) this._instanceId = instanceId;
  }
  setX(x: number): void {
    this._x = x;
  }
  setY(y: number): void {
    this._y = y;
  }
  setZ(z: number): void {
    this._z = z;
  }
  setXYZ(x: number, y: number, z: number): void {
    this._x = x;
    this._y = y;
    this._z = z;
  }
  setLocational(loc: ILocational): void {
    this._x = loc.getX();
    this._y = loc.getY();
    this._z = loc.getZ();
    this._heading = loc.getHeading();
    this._instanceId = loc.getInstanceId();
  }
  setHeading(heading: number): void {
    this._heading = heading;
  }
  setInstanceId(instanceId: number): void {
    this._instanceId = instanceId;
  }
  getInstanceId(): number {
    return this._instanceId;
  }
  setLocation(loc: Location): void {
    this._x = loc.getX();
    this._y = loc.getY();
    this._z = loc.getZ();
    this._heading = loc.getHeading();
    this._instanceId = loc.getInstanceId();
  }
  getX(): number {
    return this._x;
  }
  getY(): number {
    return this._y;
  }
  getZ(): number {
    return this._z;
  }
  getHeading(): number {
    return this._heading;
  }
  getLocation(): ILocational {
    return this;
  }
}
