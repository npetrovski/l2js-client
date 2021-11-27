import GameClientPacket from "./GameClientPacket";

export default class PartySmallWindowDelete extends GameClientPacket {
  MemberObjId!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.MemberObjId = this.readD();
    const _memberName = this.readS();

    return true;
  }
}
