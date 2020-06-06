import GameServerPacket from "./GameServerPacket";

export default class MoveBackwardToLocation extends GameServerPacket {
  private _targetX: number;
  private _targetY: number;
  private _targetZ: number;
  private _originX: number;
  private _originY: number;
  private _originZ: number;
  constructor(targetX: number, targetY: number, targetZ: number, originX: number, originY: number, originZ: number) {
    super();
    this._targetX = targetX;
    this._targetY = targetY;
    this._targetZ = targetZ;
    this._originX = originX;
    this._originY = originY;
    this._originZ = originZ;
  }

  write(): void {
    this.writeC(0x0f);
    this.writeD(this._targetX);
    this.writeD(this._targetY);
    this.writeD(this._targetZ);
    this.writeD(this._originX);
    this.writeD(this._originY);
    this.writeD(this._originZ);
    this.writeD(1); // is 0 if cursor keys are used 1 if mouse is used
  }
}
