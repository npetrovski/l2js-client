import GameServerPacket from "./GameServerPacket";

export default class RequestMagicSkillUse extends GameServerPacket {
  private _skillId: number;
  private _ctrlPressed: number;
  private _shiftPressed: number;
  constructor(skillId: number, ctrlPressed: boolean, shiftPressed: boolean) {
    super();
    this._skillId = skillId;
    this._ctrlPressed = ctrlPressed ? 1 : 0;
    this._shiftPressed = shiftPressed ? 1 : 0;
  }

  write(): void {
    this.writeC(0x39);
    this.writeD(this._skillId);
    this.writeD(this._ctrlPressed);
    this.writeC(this._shiftPressed);
  }
}
