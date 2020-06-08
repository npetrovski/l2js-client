import IStream from "./IStream";

type MMOConfigPartial = {
  [P in keyof MMOConfig]?: MMOConfig[P];
};

export default class MMOConfig {
  private _username: string = "";
  private _password: string = "";
  private _serverId: number = 1;
  private _charSlotIndex: number = 0;
  private _stream: IStream | string = "auto";
  private _ip: string = "127.0.0.1";
  private _port: number = 2106;

  public get Username(): string {
    return this._username;
  }

  public set Username(username: string) {
    this._username = username;
  }

  public get Password(): string {
    return this._password;
  }

  public set Password(password: string) {
    this._password = password;
  }

  public get ServerId(): number {
    return this._serverId;
  }

  public get CharSlotIndex(): number {
    return this._charSlotIndex;
  }

  public get Stream(): IStream | string {
    return this._stream;
  }

  public get Ip(): string {
    return this._ip;
  }

  public get Port(): number {
    return this._port;
  }

  public set ServerId(value: number) {
    this._serverId = value;
  }

  public set CharSlotIndex(value: number) {
    this._charSlotIndex = value;
  }

  public set Stream(value: IStream | string) {
    this._stream = value;
  }

  public set Ip(value: string) {
    this._ip = value;
  }

  public set Port(value: number) {
    this._port = value;
  }

  assign(props: MMOConfigPartial): this {
    for (const key of Object.keys(props)) {
      (this as any)[key] = (props as any)[key];
    }
    return this;
  }
}
