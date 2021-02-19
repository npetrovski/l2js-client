import GameClientPacket from "./GameClientPacket";

export default class RelationChanged extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

      const _objId = this.readD();
      const _relations = this.readD();
      const _attackable = this.readD() === 1;
      const _relationKarma = this.readD();
      const _relationPvpFlag = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
