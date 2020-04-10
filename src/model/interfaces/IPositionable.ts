import ILocational from "./ILocational";

export default interface IPositionable extends ILocational {
  setX(x: number): void;

  setY(y: number): void;

  setZ(z: number): void;

  setXYZ(x: number, y: number, z: number): void;

  setLocational(loc: ILocational): void;

  setHeading(heading: number): void;

  setInstanceId(instanceId: number): void;

  setLocation(loc: Location): void;
}
