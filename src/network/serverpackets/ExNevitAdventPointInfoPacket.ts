import GameClientPacket from "./GameClientPacket";

export default class ExNevitAdventPointInfoPacket extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _points = this.readD(); // 72 = 1%, max 7200 = 100%

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
