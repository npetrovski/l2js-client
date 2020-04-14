import GameClientPacket from "./GameClientPacket";

export default class RelationChanged extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _size = this.readD();

    for (var i = 0; i < _size; i++) {
      let _relationObjId = this.readD();
      let _relationRel = this.readD();
      let _relationAutoAttackable = this.readD();
      let _relationKarma = this.readD();
      let _relationPvpFlag = this.readD();
    }

    return true;
  }

  //@Override
  run(): void {}
}
