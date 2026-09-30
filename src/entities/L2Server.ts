import { ServerStatus } from "@enums/ServerStatus";
import { ServerTypes } from "@enums/ServerTypes";
import { ServerAges } from "@enums/ServerAges";

export default class L2Server {
  private _id!: number;

  private _ip!: number;

  private _port!: number;

  private _ageLimit!: ServerAges;

  private _pvp!: number;

  private _currentPlayers!: number;

  private _maxPlayers!: number;

  private _status!: ServerStatus;

  private _serverType!: ServerTypes;

  private _brackets!: number;

  public get Id(): number {
    return this._id;
  }

  public set Id(value: number) {
    this._id = value;
  }

  public get Ip(): number {
    return this._ip;
  }

  public set Ip(value: number) {
    this._ip = value;
  }

  public get Port(): number {
    return this._port;
  }

  public set Port(value: number) {
    this._port = value;
  }

  public get AgeLimit(): ServerAges {
    return this._ageLimit;
  }

  public set AgeLimit(value: ServerAges) {
    this._ageLimit = value;
  }

  public get Pvp(): number {
    return this._pvp;
  }

  public set Pvp(value: number) {
    this._pvp = value;
  }

  public get CurrentPlayers(): number {
    return this._currentPlayers;
  }

  public set CurrentPlayers(value: number) {
    this._currentPlayers = value;
  }

  public get MaxPlayers(): number {
    return this._maxPlayers;
  }

  public set MaxPlayers(value: number) {
    this._maxPlayers = value;
  }

  public get Status(): ServerStatus {
    return this._status;
  }

  public set Status(value: ServerStatus) {
    this._status = value;
  }

  public get ServerType(): ServerTypes {
    return this._serverType;
  }

  public set ServerType(value: ServerTypes) {
    this._serverType = value;
  }

  public get Brackets(): number {
    return this._brackets;
  }

  public set Brackets(value: number) {
    this._brackets = value;
  }

  public Ipv4(): string {
    const p1 = this._ip & 255;
    const p2 = (this._ip >> 8) & 255;
    const p3 = (this._ip >> 16) & 255;
    const p4 = (this._ip >> 24) & 255;

    return `${p1}.${p2}.${p3}.${p4}`;
  }
}
