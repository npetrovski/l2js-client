import ListenersContainer from "./events/ListenersContainer";
import IIdentifiable from "./interfaces/IIdentifiable";
import INamable from "./interfaces/INamable";
import ISpawnable from "./interfaces/ISpawnable";
import IUniqueId from "./interfaces/IUniqueId";
import IDecayable from "./interfaces/IDecayable";
import IPositionable from "./interfaces/IPositionable";
import ILocational from "./interfaces/ILocational";
import L2WorldRegion from "./L2WorldRegion";
import { L2InstanceType } from "../enums/L2InstanceType";

export default abstract class L2Object extends ListenersContainer
  implements IIdentifiable, INamable, ISpawnable, IUniqueId, IDecayable, IPositionable {
  private _name!: string;
  private _objectId!: number;
  private _x: number = 0;
  private _y: number = 0;
  private _z: number = 0;
  private _heading: number = 0; //Orientation
  private _instanceId: number = 0; //Instance id of object. 0 - Global
  private _isVisible!: boolean;
  private _isInvisible!: boolean;
  private _worldRegion!: L2WorldRegion;
  private _instanceType!: L2InstanceType;

  public getInstanceType(): L2InstanceType {
    return this._instanceType;
  }

  public setInstanceType(value: L2InstanceType) {
    this._instanceType = value;
  }

  public getWorldRegion(): L2WorldRegion {
    return this._worldRegion;
  }

  public setWorldRegion(value: L2WorldRegion) {
    this._worldRegion = value;
  }

  public getIsInvisible(): boolean {
    return this._isInvisible;
  }

  public setIsInvisible(value: boolean) {
    this._isInvisible = value;
  }

  public getIsVisible(): boolean {
    return this._isVisible;
  }

  public setIsVisible(value: boolean) {
    this._isVisible = value;
  }

  public getId(): number {
    throw new Error("Method not implemented.");
  }

  public getName(): string {
    return this._name;
  }

  public setName(name: string): void {
    this._name = name;
  }

  public spawnMe(): boolean {
    throw new Error("Method not implemented.");
  }

  public getObjectId(): number {
    return this._objectId;
  }

  public setObjectId(objectId: number): void {
    this._objectId = objectId;
  }

  public decayMe(): boolean {
    throw new Error("Method not implemented.");
  }

  public setX(x: number): void {
    this._x = x;
  }

  public setY(y: number): void {
    this._y = y;
  }

  public setZ(z: number): void {
    this._z = z;
  }

  public setXYZ(x: number, y: number, z: number): void {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  public setLocational(loc: ILocational): void {
    throw new Error("Method not implemented.");
  }

  public setHeading(heading: number): void {
    this._heading = heading;
  }

  public setInstanceId(instanceId: number): void {
    throw new Error("Method not implemented.");
  }

  public getX(): number {
    return this._x;
  }

  public getY(): number {
    return this._y;
  }

  public getZ(): number {
    return this._z;
  }

  public getHeading(): number {
    return this._heading;
  }

  public setLocation(loc: Location): void {
    /*
		_x.set(loc.getX());
		_y.set(loc.getY());
		_z.set(loc.getZ());
		_heading.set(loc.getHeading());
		_instanceId.set(loc.getInstanceId());
*/
  }

  public getLocation(): ILocational {
    throw new Error("Method not implemented.");
  }
}
