import GameClientPacket from "./GameClientPacket";

export default class RestartResponse extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _result = this.readD(); // 1 or 0


    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
