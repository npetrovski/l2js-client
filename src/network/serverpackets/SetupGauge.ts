import GameClientPacket from "./GameClientPacket";

export default class SetupGauge extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _gauge = this.readD();
    const _timeLeftMS = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
