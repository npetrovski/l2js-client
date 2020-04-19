import L2Object from "./L2Object";
import L2ObjectCollection from "./L2ObjectCollection";
import L2Item from "./L2Item";

export default class L2Mail extends L2Object {
  private _itemsList: L2ObjectCollection<L2Item> = new L2ObjectCollection();

  private _to!: string;

  private _title!: string;

  private _description!: string;

  private _senderName!: string;

  private _isLocked!: boolean;

  private _isUnread!: boolean;

  private _hasAttachments!: boolean;

  private _expiration!: Date;

  private _expirationSeconds!: number;

  private _requiresAdena!: number;

  public get To(): string {
    return this._to;
  }

  public get Title(): string {
    return this._title;
  }

  public get Description(): string {
    return this._description;
  }

  public get SenderName(): string {
    return this._senderName;
  }

  public get IsLocked(): boolean {
    return this._isLocked;
  }

  public get IsUnread(): boolean {
    return this._isUnread;
  }

  public get HasAttachments(): boolean {
    return this._hasAttachments;
  }

  public get Expiration(): Date {
    return this._expiration;
  }

  public get ExpirationSeconds(): number {
    return this._expirationSeconds;
  }

  public get RequiresAdena(): number {
    return this._requiresAdena;
  }

  public set To(value: string) {
    this._to = value;
  }

  public set Title(value: string) {
    this._title = value;
  }

  public set Description(value: string) {
    this._description = value;
  }

  public set SenderName(value: string) {
    this._senderName = value;
  }

  public set IsLocked(value: boolean) {
    this._isLocked = value;
  }

  public set IsUnread(value: boolean) {
    this._isUnread = value;
  }

  public set HasAttachments(value: boolean) {
    this._hasAttachments = value;
  }

  public set Expiration(value: Date) {
    this._expiration = value;
  }

  public set ExpirationSeconds(value: number) {
    this._expirationSeconds = value;
  }

  public set RequiresAdena(value: number) {
    this._requiresAdena = value;
  }
}
