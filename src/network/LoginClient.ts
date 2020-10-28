import MMOClient from "../mmocore/MMOClient";
import MMOConfig from "../mmocore/MMOConfig";
import MMOConnection from "../mmocore/MMOConnection";
import LoginCrypt from "../security/crypt/LoginCrypt";
import LoginPacketHandler from "./LoginPacketHandler";
import ServerData from "./ServerData";
import LoginServerPacket from "./clientpackets/LoginServerPacket";
import { GlobalEvents } from "../mmocore/EventEmitter";

export default class LoginClient extends MMOClient {

  private _loginCrypt: LoginCrypt = new LoginCrypt(LoginCrypt.STATIC_BLOWFISH_KEY);
  private _blowfishKey!: Uint8Array;
  private _servers: ServerData[] = [];
  private _serverId!: number;
  private _config!: MMOConfig;

  get ServerId(): number {
    return this._serverId;
  }

  set ServerId(serverId: number) {
    this._serverId = serverId;
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
    super();
    this.Connection = new MMOConnection(config, this);

    this.Config = config;

    this.PacketHandler = new LoginPacketHandler();

    this.Session.username = config.Username;

    if (config.ServerId) {
      this._serverId = config.ServerId;
    }
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
