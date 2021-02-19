import GameClientPacket from "./GameClientPacket";

export default class PledgeShowMemberListAdd extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _memberName = this.readS();
    const _memberLevel = this.readD();
    const _memberClass = this.readD();
    const _memberSex = this.readD();
    const _memberRace = this.readD();
    const _memberOnline = this.readD() === 1;

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
