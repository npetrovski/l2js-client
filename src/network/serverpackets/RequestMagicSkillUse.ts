import GameServerPacket from "./GameServerPacket";

export default class RequestMagicSkillUse extends GameServerPacket {
  private _magicId: number;
  private _ctrlPressed: number;
  private _shiftPressed: number;
  constructor(magicId: number, ctrlPressed: boolean, shiftPressed: boolean) {
    super();
    this._magicId = magicId;
    this._ctrlPressed = ctrlPressed ? 1 : 0;
    this._shiftPressed = shiftPressed ? 1 : 0;
  }

  write(): void {
    this.writeC(0x39);
    this.writeD(this._magicId);
    this.writeD(this._ctrlPressed);
    this.writeC(this._shiftPressed);
  }
}
