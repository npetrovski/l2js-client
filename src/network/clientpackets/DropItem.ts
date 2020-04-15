import GameClientPacket from "./GameClientPacket";

export default class DropItem extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _charObjectId = this.readD();
    let _itemObjId = this.readD();
    let _itemDisplayId = this.readD();

    let [_x, _y, _z] = this.readLoc();

    let _isStackable = this.readD() == 1;

    let _count = this.readQ();
    let _unkn1 = this.readD();

    return true;
  }

  //@Override
  run(): void {}
}
