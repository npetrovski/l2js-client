export default abstract class L2Object {
  private _id!: number;
  private _objectId!: number;
  private _name!: string;
  private _x!: number;
  private _y!: number;
  private _z!: number;
  private _heading!: number;
  private _distance!: number;

  public get Distance(): number {
    return this._distance;
  }

  public set Distance(value: number) {
    this._distance = value;
  }

  public get Heading(): number {
    return this._heading;
  }

  public set Heading(value: number) {
    this._heading = value;
  }

  public get Id(): number {
    return this._id;
  }

  public set Id(value: number) {
    this._id = value;
  }

  public get ObjectId(): number {
    return this._objectId;
  }

  public set ObjectId(value: number) {
    this._objectId = value;
  }

  public get Name(): string {
    return this._name;
  }

  public set Name(value: string) {
    this._name = value;
  }

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

  public get Z(): number {
    return this._z;
  }

  public set Z(value: number) {
    this._z = value;
  }

  public getLocation(): number[] {
    return Array.from([this._x, this._y, this._z, this._heading]);
  }

  public setLocation(x: number, y: number, z: number, heading?: number): void {
    this._x = x;
    this._y = y;
    this._z = z;
    if (heading) {
      this._heading = heading;
    }
  }

  public calculateDistance(obj: L2Object): number {
    this.Distance = Math.sqrt((this.X - obj.X) * (this.X - obj.X) + (this.Y - obj.Y) * (this.Y - obj.Y));
    return this.Distance;
  }
}
