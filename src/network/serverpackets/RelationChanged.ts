import GameClientPacket from "./GameClientPacket";

export default class RelationChanged extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _objid = this.readD();
    const _relation = this.readD();
    const _autoattackable = this.readD();
    const _karma = this.readD();
    const _pvpflag = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
