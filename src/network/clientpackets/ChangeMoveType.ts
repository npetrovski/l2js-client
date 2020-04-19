import GameClientPacket from "./GameClientPacket";

export default class ChangeMoveType extends GameClientPacket {
  static readonly WALK: number = 0;
  static readonly RUN: number = 1;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _charObjId = this.readD();
    const _running = this.readD() === ChangeMoveType.RUN;
    const _pad1 = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
