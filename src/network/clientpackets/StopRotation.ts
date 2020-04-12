import GameClientPacket from "./GameClientPacket";

export default class StopRotation extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _charObjId = this.readD();
    let _degree = this.readD();
    let _speed = this.readD();

    let _unkn1 = this.readD();

    return true;
  }

  //@Override
  run(): void {}
}
