import GameClientPacket from "./GameClientPacket";

export default class PledgeShowMemberListDelete extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _memberName = this.readS();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
