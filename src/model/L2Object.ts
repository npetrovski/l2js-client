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
import Location from "./Location";

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
    return true;
  }

  public getObjectId(): number {
    return this._objectId;
  }

  public setObjectId(objectId: number): void {
    this._objectId = objectId;
  }

  public decayMe(): boolean {
    return true;
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
    this._instanceId = instanceId;
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
    this._x = loc.getX();
    this._y = loc.getY();
    this._z = loc.getZ();
    this._heading = loc.getHeading();
    this._instanceId = loc.getInstanceId();
  }

  public getInstanceId(): number {
    return this._instanceId;
  }

  public getLocation(): ILocational {
    throw new Location(this.getX(), this.getY(), this.getZ(), this.getHeading(), this.getInstanceId());
  }
}
