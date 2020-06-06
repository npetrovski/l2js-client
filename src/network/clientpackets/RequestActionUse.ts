import GameServerPacket from "./GameServerPacket";

export default class RequestActionUse extends GameServerPacket {
  private _actionId: number;
  private _ctrlPressed: number;
  private _shiftPressed: number;
  constructor(actionId: number, ctrlPressed: boolean, shiftPressed: boolean) {
    super();
    this._actionId = actionId;
    this._ctrlPressed = ctrlPressed ? 1 : 0;
    this._shiftPressed = shiftPressed ? 1 : 0;
  }

  write(): void {
    this.writeC(0x56);

    this.writeD(this._actionId);
    this.writeD(this._ctrlPressed);
    this.writeC(this._shiftPressed);
  }
}
