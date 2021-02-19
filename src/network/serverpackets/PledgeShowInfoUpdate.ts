import GameClientPacket from "./GameClientPacket";

export default class PledgeShowInfoUpdate extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _clanId = this.readD();
    const _crestId = this.readD();
    const _clanLevel = this.readD();
    const _hasCastle = this.readD() === 1;
    const _hasHideout = this.readD() === 1;
    const _rank = this.readD();
    const _reputation = this.readD();
    const _status = this.readD();

    const _unk0 = this.readD();

    const _allyId = this.readD();
    const _allyName = this.readS();
    const _allyCrestId = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
