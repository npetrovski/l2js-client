import GameClientPacket from "./GameClientPacket";

export default class SurrenderPledgeWar extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _pledgeName = this.readS();
    const _playerName = this.readS();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
