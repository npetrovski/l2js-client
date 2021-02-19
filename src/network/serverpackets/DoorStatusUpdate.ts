import GameClientPacket from "./GameClientPacket";

export default class DoorStatusUpdate extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _doorObjId = this.readD();
    const _closed = this.readD() === 1;
    const _damageLevel = this.readD();
    const _attackable = this.readD() === 1;

    const _doorId = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
