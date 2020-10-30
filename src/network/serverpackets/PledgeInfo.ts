import GameClientPacket from "./GameClientPacket";

export default class PledgeInfo extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _clanId = this.readD();
    const _clanName = this.readS();
    const _allyName = this.readS();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
