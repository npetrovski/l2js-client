import GameClientPacket from "./GameClientPacket";

export default class NewCharacterSuccess extends GameClientPacket {
  CreatureObjId!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _size = this.readD();

    for (let i = 0; i < _size; i++) {
      const _race = this.readD()
      const _class = this.readD()
      const _baseStr = this.readD()
      const _unknown = this.readD()
      const _baseDex = this.readD()
      const _unknown2 = this.readD()
      const _unknown3 = this.readD()
      const _baseCon = this.readD()
      const _unknown4 = this.readD()
      const _unknown5 = this.readD()
      const _baseInt = this.readD()
      const _unknown6 = this.readD()
      const _unknown7 = this.readD()
      const _baseWit = this.readD()
      const _unknown8 = this.readD()
      const _unknown9 = this.readD()
      const _baseMen = this.readD()
      const _unknown10 = this.readD()
    }
    return true;
  }
}
