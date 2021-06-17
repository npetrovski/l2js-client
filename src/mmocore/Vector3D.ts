export default class Vector3D {
    private _x = 0;
    private _y = 0;
    private _z = 0;

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

    constructor(x: number, y: number, z: number) {
        this._x = x;
        this._y = y;
        this._z = z;
    }

    get magnitude():number {
        return this.X * this.X + this.Y * this.Y + this.Z * this.Z;
    }

    get normal():number {
        return Math.sqrt(this.magnitude);
    }

    get length():number {
        return Math.sqrt(this.dot(this));
    }

    normalize() : Vector3D {
        return this.divideScalar(this.normal);
    }

    // -- Basic Arithmetic

    add(a:Vector3D):Vector3D {
        return new Vector3D(
            this.X + a.X,
            this.Y + a.Y,
            this.Z + a.Z
        );
    }

    subtract(a:Vector3D):Vector3D {
        return new Vector3D(
            this.X - a.X,
            this.Y - a.Y,
            this.Z - a.Z
        );
    }

    multiplyScalar(s:number):Vector3D {
        return new Vector3D(
            this.X * s,
            this.Y * s,
            this.Z * s
        );
    }

    divideScalar(s:number):Vector3D {
        return new Vector3D(
            ((this.X === 0) ? 0 : this.X / s),
            ((this.Y === 0) ? 0 : this.Y / s),
            ((this.Z === 0) ? 0 : this.Z / s)
        );
    }

    // -- Comparators

    eq(b:Vector3D):boolean {
        return this.X === b.X && this.Y === b.Y && this.Z === b.Z;
    }

    neq(b:Vector3D):boolean {
        return !this.eq(b);
    }

    // -- Methods

    multiply(b:Vector3D):Vector3D {
        return new Vector3D(
            this.X * b.X,
            this.Y * b.Y,
            this.Z * b.Z
        );
    }

    divide(b:Vector3D):Vector3D {
        return new Vector3D(
            ((this.X === 0 || b.X === 0) ? 0 : this.X / b.X),
            ((this.Y === 0 || b.Y === 0) ? 0 : this.Y / b.Y),
            ((this.Z === 0 || b.Z === 0) ? 0 : this.Z / b.Z)
        );
    }

    angle(to:Vector3D):number {
        return Math.acos(this.dot(to) / (this.normal * to.normal));
    }

    dot(b:Vector3D):number {
        return this.X * b.X + this.Y * b.Y + this.Z * b.Z;
    }

    cross(b:Vector3D):Vector3D {
        return new Vector3D(
            (this.Y * b.Z) - (this.Z * b.Y),
            (this.Z * b.X) - (this.X * b.Z),
            (this.X * b.Y) - (this.Y * b.X),
        );
    }

    distance(b:Vector3D):number {
        const dx:number = this.X - b.X;
        const dy:number = this.Y - b.Y;
        const dz:number = this.Z - b.Z;

        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    negate():Vector3D {
        return new Vector3D(
            (-1 * Math.abs(this.X)),
            (-1 * Math.abs(this.Y)),
            (-1 * Math.abs(this.Z))
        );
    }

    abs():Vector3D {
        return new Vector3D(
            (Math.abs(this.X)),
            (Math.abs(this.Y)),
            (Math.abs(this.Z))
        );
    }

    reflect():Vector3D {
        return new Vector3D(
            (-1 * this.X),
            (-1 * this.Y),
            (-1 * this.Z)
        );
    }

    lerp(b:Vector3D, a:number):Vector3D {
        return this.add(b.subtract(this).multiply(new Vector3D(a, a, a)));
    }

    // -- Static Functions

    static max(a:Vector3D, b:Vector3D):Vector3D {
        return new Vector3D(
            ((a.X > b.X) ? a.X : b.X),
            ((a.Y > b.Y) ? a.Y : b.Y),
            ((a.Z > b.Z) ? a.Z : b.Z)
        );
    }

    static min(a:Vector3D, b:Vector3D):Vector3D {
        return new Vector3D(
            ((a.X < b.X) ? a.X : b.X),
            ((a.Y < b.Y) ? a.Y : b.Y),
            ((a.Z < b.Z) ? a.Z : b.Z)
        );
    }
}