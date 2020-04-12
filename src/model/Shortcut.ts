import { ShortcutType } from "../enums/ShortcutType";

export default class Shortcut {
  private _slot!: number;
  private _page!: number;
  private _type!: ShortcutType;

  private _id!: number;
  private _level!: number;
  private _characterType!: number;
  private _sharedReuseGroup: number = 1;

  public getSlot(): number {
    return this._slot;
  }

  public getPage(): number {
    return this._page;
  }

  public getType(): ShortcutType {
    return this._type;
  }

  public getId(): number {
    return this._id;
  }

  public getLevel(): number {
    return this._level;
  }

  public getCharacterType(): number {
    return this._characterType;
  }

  public getSharedReuseGroup(): number {
    return this._sharedReuseGroup;
  }

  public setSlot(value: number) {
    this._slot = value;
  }

  public setPage(value: number) {
    this._page = value;
  }

  public setType(value: ShortcutType) {
    this._type = value;
  }

  public setId(value: number) {
    this._id = value;
  }

  public setLevel(value: number) {
    this._level = value;
  }

  public setCharacterType(value: number) {
    this._characterType = value;
  }

  public setSharedReuseGroup(value: number) {
    this._sharedReuseGroup = value;
  }
}
