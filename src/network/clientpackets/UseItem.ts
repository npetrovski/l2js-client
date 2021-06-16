import GameServerPacket from "./GameServerPacket";

export default class UseItem extends GameServerPacket {
  private _objectId: number;
  private _ctrlPressed: boolean;

  constructor(objectId: number, ctrlPress = false) {
    super();
    this._objectId = objectId;
    this._ctrlPressed = ctrlPress;
  }

  write(): void {
    this.writeC(0x19);
    this.writeD(this._objectId);
    this.writeD(this._ctrlPressed ? 1 : 0);
  }
}
