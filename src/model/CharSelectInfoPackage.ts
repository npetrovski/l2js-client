export default class CharSelectInfoPackage {
  private _name: string = "";
  private _objectId: number = 0;
  private _exp: number = 0; //long
  private _sp: number = 0;
  private _clanId: number = 0;
  private _race: number = 0;
  private _classId: number = 0;
  private _baseClassId: number = 0;
  private _deleteTimer: number = 0; //long
  private _lastAccess: number = 0; //long
  private _face: number = 0;
  private _hairStyle: number = 0;
  private _hairColor: number = 0;
  private _sex: number = 0;
  private _level: number = 1;
  private _maxHp: number = 0;
  private _currentHp: number = 0; //double
  private _maxMp: number = 0;
  private _currentMp: number = 0; //double
  private _paperdoll: Array<any> = [];
  private _karma: number = 0;
  private _pkKills: number = 0;
  private _pvpKills: number = 0;
  private _augmentationId: number = 0;
  private _x: number = 0;
  private _y: number = 0;
  private _z: number = 0;
  private _htmlPrefix: string = "";
  private _vitalityPoints: number = 0;
  private _accessLevel: number = 0;

  /**
   * Getter name
   * @return {string }
   */
  get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param {string } value
   */
  set name(value: string) {
    this._name = value;
  }

  /**
   * Getter objectId
   * @return {number }
   */
  get objectId(): number {
    return this._objectId;
  }

  /**
   * Getter exp
   * @return {number }
   */
  get exp(): number {
    return this._exp;
  }

  /**
   * Getter sp
   * @return {number }
   */
  get sp(): number {
    return this._sp;
  }

  /**
   * Getter clanId
   * @return {number }
   */
  get clanId(): number {
    return this._clanId;
  }

  /**
   * Getter race
   * @return {number }
   */
  get race(): number {
    return this._race;
  }

  /**
   * Getter classId
   * @return {number }
   */
  get classId(): number {
    return this._classId;
  }

  /**
   * Getter baseClassId
   * @return {number }
   */
  get baseClassId(): number {
    return this._baseClassId;
  }

  /**
   * Getter deleteTimer
   * @return {number }
   */
  get deleteTimer(): number {
    return this._deleteTimer;
  }

  /**
   * Getter lastAccess
   * @return {number }
   */
  get lastAccess(): number {
    return this._lastAccess;
  }

  /**
   * Getter face
   * @return {number }
   */
  get face(): number {
    return this._face;
  }

  /**
   * Getter hairStyle
   * @return {number }
   */
  get hairStyle(): number {
    return this._hairStyle;
  }

  /**
   * Getter hairColor
   * @return {number }
   */
  get hairColor(): number {
    return this._hairColor;
  }

  /**
   * Getter sex
   * @return {number }
   */
  get sex(): number {
    return this._sex;
  }

  /**
   * Getter level
   * @return {number }
   */
  get level(): number {
    return this._level;
  }

  /**
   * Getter maxHp
   * @return {number }
   */
  get maxHp(): number {
    return this._maxHp;
  }

  /**
   * Getter currentHp
   * @return {number }
   */
  get currentHp(): number {
    return this._currentHp;
  }

  /**
   * Getter maxMp
   * @return {number }
   */
  get maxMp(): number {
    return this._maxMp;
  }

  /**
   * Getter currentMp
   * @return {number }
   */
  get currentMp(): number {
    return this._currentMp;
  }

  /**
   * Getter paperdoll
   * @return {Array<any> }
   */
  get paperdoll(): Array<any> {
    return this._paperdoll;
  }

  /**
   * Getter karma
   * @return {number }
   */
  get karma(): number {
    return this._karma;
  }

  /**
   * Getter pkKills
   * @return {number }
   */
  get pkKills(): number {
    return this._pkKills;
  }

  /**
   * Getter pvpKills
   * @return {number }
   */
  get pvpKills(): number {
    return this._pvpKills;
  }

  /**
   * Getter augmentationId
   * @return {number }
   */
  get augmentationId(): number {
    return this._augmentationId;
  }

  /**
   * Getter x
   * @return {number }
   */
  get x(): number {
    return this._x;
  }

  /**
   * Getter y
   * @return {number }
   */
  get y(): number {
    return this._y;
  }

  /**
   * Getter z
   * @return {number }
   */
  get z(): number {
    return this._z;
  }

  /**
   * Getter htmlPrefix
   * @return {string }
   */
  get htmlPrefix(): string {
    return this._htmlPrefix;
  }

  /**
   * Getter vitalityPoints
   * @return {number }
   */
  get vitalityPoints(): number {
    return this._vitalityPoints;
  }

  /**
   * Getter accessLevel
   * @return {number }
   */
  get accessLevel(): number {
    return this._accessLevel;
  }

  /**
   * Setter objectId
   * @param {number } value
   */
  set objectId(value: number) {
    this._objectId = value;
  }

  /**
   * Setter exp
   * @param {number } value
   */
  set exp(value: number) {
    this._exp = value;
  }

  /**
   * Setter sp
   * @param {number } value
   */
  set sp(value: number) {
    this._sp = value;
  }

  /**
   * Setter clanId
   * @param {number } value
   */
  set clanId(value: number) {
    this._clanId = value;
  }

  /**
   * Setter race
   * @param {number } value
   */
  set race(value: number) {
    this._race = value;
  }

  /**
   * Setter classId
   * @param {number } value
   */
  set classId(value: number) {
    this._classId = value;
  }

  /**
   * Setter baseClassId
   * @param {number } value
   */
  set baseClassId(value: number) {
    this._baseClassId = value;
  }

  /**
   * Setter deleteTimer
   * @param {number } value
   */
  set deleteTimer(value: number) {
    this._deleteTimer = value;
  }

  /**
   * Setter lastAccess
   * @param {number } value
   */
  set lastAccess(value: number) {
    this._lastAccess = value;
  }

  /**
   * Setter face
   * @param {number } value
   */
  set face(value: number) {
    this._face = value;
  }

  /**
   * Setter hairStyle
   * @param {number } value
   */
  set hairStyle(value: number) {
    this._hairStyle = value;
  }

  /**
   * Setter hairColor
   * @param {number } value
   */
  set hairColor(value: number) {
    this._hairColor = value;
  }

  /**
   * Setter sex
   * @param {number } value
   */
  set sex(value: number) {
    this._sex = value;
  }

  /**
   * Setter level
   * @param {number } value
   */
  set level(value: number) {
    this._level = value;
  }

  /**
   * Setter maxHp
   * @param {number } value
   */
  set maxHp(value: number) {
    this._maxHp = value;
  }

  /**
   * Setter currentHp
   * @param {number } value
   */
  set currentHp(value: number) {
    this._currentHp = value;
  }

  /**
   * Setter maxMp
   * @param {number } value
   */
  set maxMp(value: number) {
    this._maxMp = value;
  }

  /**
   * Setter currentMp
   * @param {number } value
   */
  set currentMp(value: number) {
    this._currentMp = value;
  }

  /**
   * Setter paperdoll
   * @param {Array<any> } value
   */
  set paperdoll(value: Array<any>) {
    this._paperdoll = value;
  }

  /**
   * Setter karma
   * @param {number } value
   */
  set karma(value: number) {
    this._karma = value;
  }

  /**
   * Setter pkKills
   * @param {number } value
   */
  set pkKills(value: number) {
    this._pkKills = value;
  }

  /**
   * Setter pvpKills
   * @param {number } value
   */
  set pvpKills(value: number) {
    this._pvpKills = value;
  }

  /**
   * Setter augmentationId
   * @param {number } value
   */
  set augmentationId(value: number) {
    this._augmentationId = value;
  }

  /**
   * Setter x
   * @param {number } value
   */
  set x(value: number) {
    this._x = value;
  }

  /**
   * Setter y
   * @param {number } value
   */
  set y(value: number) {
    this._y = value;
  }

  /**
   * Setter z
   * @param {number } value
   */
  set z(value: number) {
    this._z = value;
  }

  /**
   * Setter htmlPrefix
   * @param {string } value
   */
  set htmlPrefix(value: string) {
    this._htmlPrefix = value;
  }

  /**
   * Setter vitalityPoints
   * @param {number } value
   */
  set vitalityPoints(value: number) {
    this._vitalityPoints = value;
  }

  /**
   * Setter accessLevel
   * @param {number } value
   */
  set accessLevel(value: number) {
    this._accessLevel = value;
  }
}
