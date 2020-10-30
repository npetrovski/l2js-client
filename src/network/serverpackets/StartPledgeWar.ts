import GameClientPacket from "./GameClientPacket";

export default class StartPledgeWar extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _playerName = this.readS();
    const _pledgeName = this.readS();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
