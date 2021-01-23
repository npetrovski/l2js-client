import GameServerPacket from "./GameServerPacket";

export default class Action extends GameServerPacket {
  private _objectId: number;
  private _originX: number;
  private _originY: number;
  private _originZ: number;

  private _shift = false;

  constructor(objectId: number, originX: number, originY: number, originZ: number, shift?: boolean) {
    super();
    this._objectId = objectId;
    this._originX = originX;
    this._originY = originY;
    this._originZ = originZ;
    if (shift) {
      this._shift = shift;
    }
  }

  write(): void {
    this.writeC(0x1f);
    this.writeD(this._objectId);

    this.writeD(this._originX);
    this.writeD(this._originY);
    this.writeD(this._originZ);

    this.writeC(this._shift ? 1 : 0);
  }
}
