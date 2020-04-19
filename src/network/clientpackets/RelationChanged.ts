import GameClientPacket from "./GameClientPacket";

export default class RelationChanged extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _size = this.readD();

    for (let i = 0; i < _size; i++) {
      const _relationObjId = this.readD();
      const _relationRel = this.readD();
      const _relationAutoAttackable = this.readD();
      const _relationKarma = this.readD();
      const _relationPvpFlag = this.readD();
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
