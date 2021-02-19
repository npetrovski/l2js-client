import GameClientPacket from "./GameClientPacket";

export default class DismissPledge extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _dismissYesNo = this.readD() === 1;

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
