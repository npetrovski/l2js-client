import GameClientPacket from "./GameClientPacket";

export default class Ride extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charObjId = this.readD();
    const _mounted = this.readD() === 1;
    const _mountType = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
