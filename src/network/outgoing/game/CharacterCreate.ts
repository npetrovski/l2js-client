import GameServerPacket from "./GameServerPacket";

export default class CharacterCreate extends GameServerPacket {
  private _name: string;
  private _race: number;
  private _sex: number;
  private _classId: number;
  private _int: number;
  private _str: number;
  private _con: number;
  private _men: number;
  private _dex: number;
  private _wit: number;
  private _hairStyle: number;
  private _hairColor: number;
  private _face: number;

  constructor({
    name,
    race,
    sex,
    classId,
    int,
    str,
    con,
    men,
    dex,
    wit,
    hairStyle,
    hairColor,
    face,
  }: {
    name: string;
    race: number;
    sex: number;
    classId: number;
    int: number;
    str: number;
    con: number;
    men: number;
    dex: number;
    wit: number;
    hairStyle: number;
    hairColor: number;
    face: number;
  }) {
    super();
    this._name = name;
    this._race = race;
    this._sex = sex;
    this._classId = classId;
    this._int = int;
    this._str = str;
    this._con = con;
    this._men = men;
    this._dex = dex;
    this._wit = wit;
    this._hairStyle = hairStyle;
    this._hairColor = hairColor;
    this._face = face;
  }

  write(): void {
    this.writeC(0x0c);
    this.writeS(this._name);
    this.writeD(this._race);
    this.writeD(this._sex);
    this.writeD(this._classId);
    this.writeD(this._int);
    this.writeD(this._str);
    this.writeD(this._con);
    this.writeD(this._men);
    this.writeD(this._dex);
    this.writeD(this._wit);
    this.writeD(this._hairStyle);
    this.writeD(this._hairColor);
    this.writeD(this._face);
  }
}
