import AbstractNpcInfo from "./AbstractNpcInfo";

export default class NewCharacterSuccess extends AbstractNpcInfo {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _race = this.readD();
    const _baseClass = this.readD();

    const _maxSTR = this.readD();
    const _recommSTR = this.readD();
    const _minSTR = this.readD();

    const _maxDEX = this.readD();
    const _recommDEX = this.readD();
    const _minDEX = this.readD();

    const _maxCON = this.readD();
    const _recommCON = this.readD();
    const _minCON = this.readD();

    const _maxINT = this.readD();
    const _recommINT = this.readD();
    const _minINT = this.readD();

    const _maxWIT = this.readD();
    const _recommWIT = this.readD();
    const _minWIT = this.readD();

    const _maxMEN = this.readD();
    const _recommMEN = this.readD();
    const _minMEN = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
