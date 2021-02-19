import GameClientPacket from "./GameClientPacket";

export default class StopPledgeWar extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _clanName = this.readS();
    const _leaderName = this.readS();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
