import GameClientPacket from "./GameClientPacket";

export default class MoveToPawn extends GameClientPacket {
  private _charObjId: number = 0;
  private _targetId: number = 0;
  private _distance: number = 0;
  private _x: number = 0;
  private _y: number = 0;
  private _z: number = 0;
  private _tx: number = 0;
  private _ty: number = 0;
  private _tz: number = 0;

  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    this._charObjId = this.readD();

    this._targetId = this.readD();
    this._distance = this.readD();

    this._x = this.readD();
    this._y = this.readD();
    this._z = this.readD();
    this._tx = this.readD();
    this._ty = this.readD();
    this._tz = this.readD();

    return true;
  }

  //@Override
  run(): void {
    //
  }
}
