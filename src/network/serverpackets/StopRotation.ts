import GameClientPacket from "./GameClientPacket";

export default class StopRotation extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    if (this._buffer.byteLength >= 18) {
      const _charObjId = this.readD();
      const _degree = this.readD();
      const _speed = this.readD();

      const _unkn1 = this.readD(); // bluff effect related ?
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
