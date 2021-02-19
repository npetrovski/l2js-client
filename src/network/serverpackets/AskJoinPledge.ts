import GameClientPacket from "./GameClientPacket";

export default class AskJoinPledge extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _invitorId = this.readD();
    const _clanName = this.readS();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
