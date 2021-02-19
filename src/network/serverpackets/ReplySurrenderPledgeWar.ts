import GameClientPacket from "./GameClientPacket";

export default class ReplySurrenderPledgeWar extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _surrendered = this.readD() === 1;

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
