import GameClientPacket from "./GameClientPacket";
export default class SetupGauge extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charObjId = this.readD();
    const _color = this.readD();
    const _currentTime = this.readD();
    const _maxTime = this.readD();

    if (
      this.Client.ActiveChar.ObjectId === _charObjId &&
      _currentTime === _maxTime &&
      _currentTime > 0
    ) {
      this.Client.ActiveChar.Gauge = _currentTime;
    }
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
