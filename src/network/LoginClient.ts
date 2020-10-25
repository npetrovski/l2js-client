import MMOClient from "../mmocore/MMOClient";
import MMOConfig from "../mmocore/MMOConfig";
import MMOConnection from "../mmocore/MMOConnection";
import LoginCrypt from "../security/crypt/LoginCrypt";
import LoginPacketHandler from "./LoginPacketHandler";
import ServerData from "./ServerData";
import LoginServerPacket from "./clientpackets/LoginServerPacket";
import { GlobalEvents } from "../mmocore/EventEmitter";
import Logger from "../mmocore/Logger";

export default class LoginClient extends MMOClient {

  private _username: string;

  private _password: string;

  private _loginCrypt: LoginCrypt;

  private _sessionId: number = 0;

  private _blowfishKey!: Uint8Array;

  private _publicKey!: Uint8Array;

  private _servers: ServerData[] = [];

  private _serverId!: number;

  private _config!: MMOConfig;

  get ServerId(): number {
    return this._serverId;
  }

  set ServerId(serverId: number) {
    this._serverId = serverId;
  }

  get Username(): string {
    return this._username;
  }

  set Username(username: string) {
    this._username = username;
  }

  get Password(): string {
    return this._password;
  }

  set Password(password: string) {
    this._password = password;
  }

  get PublicKey(): Uint8Array {
    return this._publicKey;
  }

  set PublicKey(publicKey: Uint8Array) {
    this._publicKey = publicKey;
  }

  get SessionId(): number {
    return this._sessionId;
  }

  set SessionId(sessionId: number) {
    this._sessionId = sessionId;
  }

  get BlowfishKey(): Uint8Array {
    return this._blowfishKey;
  }

  set BlowfishKey(blowfishKey: Uint8Array) {
    this._blowfishKey = blowfishKey;
  }

  get Servers(): ServerData[] {
    return this._servers;
  }

  set Servers(servers: ServerData[]) {
    this._servers = servers;
  }

  get Config(): MMOConfig {
    return this._config;
  }

  set Config(config: MMOConfig) {
    this._config = config;
  }

  constructor(config: MMOConfig) {
    super(new MMOConnection(config));
    this.Config = config;
    (this.Connection as MMOConnection<LoginClient>).Client = this;
    this.PacketHandler = new LoginPacketHandler();

    this.Session.username = config.Username;
    this._username = config.Username;
    this._password = config.Password;
    if (config.ServerId) {
      this._serverId = config.ServerId;
    }
    this._loginCrypt = new LoginCrypt();
    this._loginCrypt.setKey(LoginCrypt.STATIC_BLOWFISH_KEY);
  }

  sendPacket(lsp: LoginServerPacket): void {
    lsp.write();

    const count = lsp.Position % 8 === 0 ? lsp.Position : lsp.Position + (8 - (lsp.Position % 8));
    this._loginCrypt.setKey(this.BlowfishKey);
    this._loginCrypt.encrypt(lsp.Buffer, 0, count);

    const sendable: Uint8Array = new Uint8Array(count + 2);
    sendable[0] = (count + 2) & 0xff;
    sendable[1] = (count + 2) >>> 8;
    sendable.set(lsp.Buffer.slice(0, count), 2);

    this.logger.debug("Sending ", lsp.constructor.name);
    this.sendRaw(sendable).then(() => {
      GlobalEvents.fire(`PacketSent:${lsp.constructor.name}`, { packet: lsp });
    });
  }

  encrypt(buf: Uint8Array, offset: number, size: number): void {
    this._loginCrypt.encrypt(buf, offset, size);
  }

  decrypt(buf: Uint8Array, offset: number, size: number): void {
    this._loginCrypt.decrypt(buf, offset, size);
  }
}
