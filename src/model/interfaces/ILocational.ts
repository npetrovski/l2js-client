export default interface ILocational {
  getX(): number;
  getY(): number;
  getZ(): number;
  getHeading(): number;
  getLocation(): ILocational;
  getInstanceId(): number;
}
