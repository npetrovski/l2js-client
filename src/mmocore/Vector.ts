export default class Vector {
  private _x = 0;
  private _y = 0;

  public get X(): number {
    return this._x;
  }

  public set X(value: number) {
    this._x = value;
  }

  public get Y(): number {
    return this._y;
  }

  public set Y(value: number) {
    this._y = value;
  }

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  negative(): Vector {
    this._x = -this._x;
    this._y = -this._y;
    return this;
  }

  add(v: Vector | number): Vector {
    if (v instanceof Vector) {
      this._x += v.X;
      this._y += v.Y;
    } else {
      this._x += v;
      this._y += v;
    }
    return this;
  }

  subtract(v: Vector | number): Vector {
    if (v instanceof Vector) {
      this._x -= v.X;
      this._y -= v.Y;
    } else {
      this._x -= v;
      this._y -= v;
    }
    return this;
  }
  multiply(v: Vector | number): Vector {
    if (v instanceof Vector) {
      this._x *= v.X;
      this._y *= v.Y;
    } else {
      this._x *= v;
      this._y *= v;
    }
    return this;
  }

  divide(v: Vector | number): Vector {
    if (v instanceof Vector) {
      if (v.X !== 0) this._x /= v.X;
      if (v.Y !== 0) this._y /= v.Y;
    } else {
      if (v !== 0) {
        this._x /= v;
        this._y /= v;
      }
    }
    return this;
  }

  equals(v: Vector): boolean {
    return this._x === v.X && this._y === v.Y;
  }

  dot(v: Vector): number {
    return this._x * v.X + this._y * v.Y;
  }

  cross(v: Vector): number {
    return this._x * v.Y - this._y * v.X;
  }

  length(): number {
    return Math.sqrt(this.dot(this));
  }

  normalize(): Vector {
    return this.divide(this.length());
  }

  min(): number {
    return Math.min(this._x, this._y);
  }

  max(): number {
    return Math.max(this._x, this._y);
  }

  toAngles(): number {
    return -Math.atan2(-this._y, this._x);
  }
  angleTo(a: Vector): number {
    return Math.acos(this.dot(a) / (this.length() * a.length()));
  }

  toArray(n?: number): any[] {
    return [this._x, this._y].slice(0, n || 2);
  }

  clone(): Vector {
    return new Vector(this._x, this._y);
  }

  set(x: number, y: number): Vector {
    this._x = x;
    this._y = y;
    return this;
  }

  toString(): string {
    return "x: " + this._x + ", y: " + this._y;
  }

  toObject(): Record<string, unknown> {
    return { x: this._x, y: this._y };
  }
}
