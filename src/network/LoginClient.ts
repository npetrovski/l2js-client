import MMOClient from "../mmocore/MMOClient";
import MMOConfig from "../mmocore/MMOConfig";
import MMOConnection from "../mmocore/MMOConnection";
import LoginCrypt from "../security/crypt/LoginCrypt";
import LoginPacketHandler from "./LoginPacketHandler";
import ServerData from "./ServerData";
import LoginServerPacket from "./clientpackets/LoginServerPacket";
import { GlobalEvents } from "../mmocore/EventEmitter";
import IConnection from "../mmocore/IConnection";

export default class LoginClient extends MMOClient {

  private _loginCrypt: LoginCrypt = new LoginCrypt();
  private _blowfishKey!: Uint8Array;
  private _servers: ServerData[] = [];
  private _serverId = 1;
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
    this._loginCrypt.setKey(blowfishKey);
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

  constructor() {
    super();
    this.PacketHandler = new LoginPacketHandler();
  }

  init(config: MMOConfig, connection?: IConnection): this {
    this.Connection = connection ?? new MMOConnection(config, this);

    this.Config = config;

    this.Session.username = config.Username;

    if (config.ServerId) {
      this._serverId = config.ServerId;
    }

    return this;
  }

  pack(lsp: LoginServerPacket): Uint8Array {
    lsp.write();

    const count = lsp.Position % 8 === 0 ? lsp.Position : lsp.Position + (8 - (lsp.Position % 8));
    this._loginCrypt.encrypt(lsp.Buffer, 0, count);

    const sendable: Uint8Array = new Uint8Array(count + 2);
    sendable[0] = (count + 2) & 0xff;
    sendable[1] = (count + 2) >>> 8;
    sendable.set(lsp.Buffer.slice(0, count), 2);

    return sendable;
  }

  sendPacket(lsp: LoginServerPacket): Promise<void> {
    const sendable: Uint8Array = this.pack(lsp);

    this.logger.debug("Sending ", lsp.constructor.name);
    return this.sendRaw(sendable).then(() => {
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
