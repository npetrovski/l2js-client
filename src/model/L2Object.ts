import ListenersContainer from "./events/ListenersContainer";
import IIdentifiable from "./interfaces/IIdentifiable";
import INamable from "./interfaces/INamable";
import ISpawnable from "./interfaces/ISpawnable";
import IUniqueId from "./interfaces/IUniqueId";
import IDecayable from "./interfaces/IDecayable";
import IPositionable from "./interfaces/IPositionable";
import ILocational from "./interfaces/ILocational";

export default abstract class L2Object extends ListenersContainer
  implements IIdentifiable, INamable, ISpawnable, IUniqueId, IDecayable, IPositionable {
  private _name!: string;

  private _objectId!: number;

  private _x: number = 0;
  private _y: number = 0;
  private _z: number = 0;

  getId(): number {
    throw new Error("Method not implemented.");
  }
  getName(): string {
    return this._name;
  }
  setName(name: string): void {
    this._name = name;
  }
  spawnMe(): boolean {
    throw new Error("Method not implemented.");
  }
  getObjectId(): number {
    return this._objectId;
  }
  setObjectId(objectId: number): void {
    this._objectId = objectId;
  }
  decayMe(): boolean {
    throw new Error("Method not implemented.");
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
    throw new Error("Method not implemented.");
  }
  setHeading(heading: number): void {
    throw new Error("Method not implemented.");
  }
  setInstanceId(instanceId: number): void {
    throw new Error("Method not implemented.");
  }
  setLocation(loc: Location): void {
    throw new Error("Method not implemented.");
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
    throw new Error("Method not implemented.");
  }
  getLocation(): ILocational {
    throw new Error("Method not implemented.");
  }
}
