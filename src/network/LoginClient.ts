import MMOClient from "../mmocore/MMOClient";
import MMOConfig from "../mmocore/MMOConfig";
import MMOConnection from "../mmocore/MMOConnection";
import LoginCrypt from "./LoginCrypt";
import LoginPacketHandler from "./LoginPacketHandler";
import L2Server from "../entities/L2Server";
import LoginServerPacket from "./outgoing/login/LoginServerPacket";
import { GlobalEvents } from "../mmocore/EventEmitter";
import IConnection from "../mmocore/IConnection";
import mutators from "./mutators/login/index";

export default class LoginClient extends MMOClient {
  private _loginCrypt: LoginCrypt = new LoginCrypt();
  private _blowfishKey!: Uint8Array;
  private _servers: L2Server[] = [];
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

  get Servers(): L2Server[] {
    return this._servers;
  }

  set Servers(servers: L2Server[]) {
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

    mutators.forEach((m) => {
      const mutator = Object.create(m[0], {
        Client: { value: this },
        PacketType: { value: (m[1] as any).name },
      });
      this.registerMutator(mutator);
    });
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

    if (!lsp.Buffer || lsp._offset === 0) {
      return new Uint8Array();
    }

    const pos = lsp._offset + 4;
    const count = pos + (8 - (pos % 8));

    const data = new Uint8Array(count + 2);
    data.set(lsp.Buffer.slice(0, count), 2);

    this.encrypt(data, 2, count - 2);

    data[0] = (count + 2) & 0xff;
    data[1] = (count + 2) >>> 8;

    return data;
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
