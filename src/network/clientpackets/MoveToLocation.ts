import GameClientPacket from "./GameClientPacket";

export default class MoveToLocation extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _charObjId = this.readD();

    let _xDst = this.readD();
    let _yDst = this.readD();
    let _zDst = this.readD();

    let _x = this.readD();
    let _y = this.readD();
    let _z = this.readD();

    return true;
  }

  //@Override
  run(): void {
    //
  }
}
