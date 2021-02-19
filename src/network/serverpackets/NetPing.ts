import GameClientPacket from "./GameClientPacket";

export default class NetPing extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _request = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
