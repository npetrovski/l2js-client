import GameClientPacket from "./GameClientPacket";

export default class MoveToPawn extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _charObjId = this.readD();
    let _targetId = this.readD();
    let _distance = this.readD();

    let [_x, _y, _z] = this.readLoc();
    let [_tx, _ty, _tz] = this.readLoc();

    return true;
  }

  //@Override
  run(): void {}
}
