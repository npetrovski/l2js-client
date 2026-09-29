import Logger from "./Logger";

export default abstract class AbstractPacket {
  protected readonly logger = Logger.for(this);

  pow2(n: number): number {
    if (n >= 0 && n < 31) {
      return 1 << n;
    }
    return Math.pow(2, n);
  }
}
