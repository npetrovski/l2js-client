import GameClientPacket from "./GameClientPacket";

export default class PlaySound extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _type = this.readD();
    const _file = this.readS();
    const _3d = this.readD() === 1;
    const _sourceId = this.readD();
    const [_x, _y, _z] = this.readLoc();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
