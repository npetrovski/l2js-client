import L2PcInstance from "../instance/L2PcInstance";

export default class PcAppearance {
  static readonly DEFAULT_TITLE_COLOR: number = 0xecf9a2;

  private _owner!: L2PcInstance;

  private _face!: number;

  private _hairColor!: number;

  private _hairStyle!: number;

  private _sex!: boolean; // Female true(1)

  private _ghostmode: boolean = false; //true if the player is invisible

  private __visibleName!: string;

  private _visibleTitle!: string;

  private _nameColor: number = 0xffffff;

  private _titleColor: number = PcAppearance.DEFAULT_TITLE_COLOR;

  /**
   * Getter face
   * @return {number}
   */
  public getFace(): number {
    return this._face;
  }

  /**
   * Getter hairColor
   * @return {number}
   */
  public getHairColor(): number {
    return this._hairColor;
  }

  /**
   * Getter hairStyle
   * @return {number}
   */
  public getHairStyle(): number {
    return this._hairStyle;
  }

  /**
   * Getter sex
   * @return {boolean}
   */
  public getSex(): boolean {
    return this._sex;
  }

  /**
   * Getter ghostmode
   * @return {boolean }
   */
  public getGhostmode(): boolean {
    return this._ghostmode;
  }

  /**
   * Getter _visibleName
   * @return {string}
   */
  public getVisibleName(): string {
    return this.__visibleName;
  }

  /**
   * Getter visibleTitle
   * @return {string}
   */
  public getVisibleTitle(): string {
    return this._visibleTitle;
  }

  /**
   * Getter nameColor
   * @return {number }
   */
  public getNameColor(): number {
    return this._nameColor;
  }

  /**
   * Getter titleColor
   * @return {number }
   */
  public getTitleColor(): number {
    return this._titleColor;
  }

  /**
   * Setter face
   * @param {number} value
   */
  public setFace(value: number) {
    this._face = value;
  }

  /**
   * Setter hairColor
   * @param {number} value
   */
  public setHairColor(value: number) {
    this._hairColor = value;
  }

  /**
   * Setter hairStyle
   * @param {number} value
   */
  public setHairStyle(value: number) {
    this._hairStyle = value;
  }

  /**
   * Setter sex
   * @param {boolean} value
   */
  public setSex(value: boolean) {
    this._sex = value;
  }

  /**
   * Setter ghostmode
   * @param {boolean } value
   */
  public setGhostmode(value: boolean) {
    this._ghostmode = value;
  }

  /**
   * Setter _visibleName
   * @param {string} value
   */
  public setVisibleName(value: string) {
    this.__visibleName = value;
  }

  /**
   * Setter visibleTitle
   * @param {string} value
   */
  public setVisibleTitle(value: string) {
    this._visibleTitle = value;
  }

  /**
   * Setter nameColor
   * @param {number } value
   */
  public setNameColor(value: number) {
    this._nameColor = value;
  }

  /**
   * Setter titleColor
   * @param {number } value
   */
  public setTitleColor(value: number) {
    this._titleColor = value;
  }
}
