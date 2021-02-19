import GameClientPacket from "./GameClientPacket";

export default class JoinPledge extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _accepted = this.readD() === 1;

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
