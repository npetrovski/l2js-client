import GameClientPacket from "./GameClientPacket";

export default class StopMove extends GameClientPacket {
  private _objectId: number = 0;
  private _x: number = 0;
  private _y: number = 0;
  private _z: number = 0;
  private _heading: number = 0;

  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    this._objectId = this.readD();
    this._x = this.readD();
    this._y = this.readD();
    this._z = this.readD();
    this._heading = this.readD();

    return true;
  }

  //@Override
  run(): void {}
}
