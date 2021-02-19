import GameClientPacket from "./GameClientPacket";

export default class ChangeWaitType extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _charObjId = this.readD();
    const _waitType = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
