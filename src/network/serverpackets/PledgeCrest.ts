import GameClientPacket from "./GameClientPacket";

export default class PledgeCrest extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _crestId = this.readD();
    const _crestBytesSize = this.readD();
    const _crestRaw = this.readB(_crestBytesSize);

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
