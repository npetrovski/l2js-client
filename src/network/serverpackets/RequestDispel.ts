import GameServerPacket from "./GameServerPacket";

export default class RequestDispel extends GameServerPacket {
  private _objectId: number;
  private _skillId: number;
  private _skillLevel: number;
  constructor(objectId: number, skillId: number, skillLevel: number) {
    super();
    this._objectId = objectId;
    this._skillId = skillId;
    this._skillLevel = skillLevel;
  }

  write(): void {
    this.writeC(0xd0);
    this.writeH(0x4b);
    this.writeD(this._objectId);
    this.writeD(this._skillId);
    this.writeD(this._skillLevel);
  }
}
