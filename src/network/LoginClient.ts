import MMOClient from "../mmocore/MMOClient";
import MMOConfig from "../mmocore/MMOConfig";
import MMOConnection from "../mmocore/MMOConnection";
import LoginCrypt from "./LoginCrypt";
import L2Server from "../entities/L2Server";
import { GlobalEvents } from "../mmocore/EventEmitter";
import IConnection from "../mmocore/IConnection";
import mutators from "./mutators/login/index";
import SocketFactory from "../socket/SocketFactory";
import MMOSession from "../mmocore/MMOSession";
import PacketHandler from "./PacketHandler";
import { default as packets } from "./packets/index";
import SerializablePacket from "../mmocore/SerializablePacket";
import IPacketHandler from "../mmocore/IPacketHandler";

export default class LoginClient extends MMOClient {
  private _loginCrypt = new LoginCrypt();
  private _servers: L2Server[] = [];
  private _serverId = 1;
  private _config!: MMOConfig;
  private _serverPacketsHandler!: IPacketHandler;
  private _clientPacketsHandler!: IPacketHandler;

  get ServerId(): number {
    return this._serverId;
  }

  set ServerId(serverId: number) {
    this._serverId = serverId;
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

  get ServerPacketsHandler(): IPacketHandler {
    if (!this._serverPacketsHandler) {
      this._serverPacketsHandler = new PacketHandler(
        Object.fromEntries(
          Object.entries((packets.auth as any)[this.Protocol].server).map(([key, meta]) => {
            return [(meta as any).prefix, { name: key, schema: (meta as any).schema }];
          })
        )
      );
    }
    return this._serverPacketsHandler;
  }

  set ServerPacketsHandler(handler: IPacketHandler) {
    this._serverPacketsHandler = handler;
  }

  get ClientPacketsHandler(): IPacketHandler {
    if (!this._clientPacketsHandler) {
      this._clientPacketsHandler = new PacketHandler(
        Object.fromEntries(
          Object.entries((packets.auth as any)[this.Protocol].client).map(([key, meta]) => {
            return [(meta as any).prefix, { name: key, schema: (meta as any).schema }];
          })
        )
      );
    }
    return this._clientPacketsHandler;
  }

  set ClientPacketsHandler(handler: IPacketHandler) {
    this._clientPacketsHandler = handler;
  }

  public Packets!: {
    client: { [name: string]: { prefix: string; schema: unknown } };
    server: { [name: string]: { prefix: string; schema: unknown } };
  };

  constructor(public Protocol: string) {
    super();

    this.logger.debug(`Auth protocol: '${Protocol}'`);

    this.Packets = (packets.auth as any)[this.Protocol];

    mutators.forEach((m) => {
      const mutator = Object.create(m[0] as any, {
        Client: { value: this },
        PacketType: { value: m[1] },
      });
      this.registerMutator(mutator);
    });
  }

  reset(): void {
    this._servers = [];
    this._buffer = new Uint8Array();
    this._loginCrypt = new LoginCrypt();
  }

  init(config: MMOConfig, connection?: IConnection): this {
    this.Connection = connection ?? new MMOConnection(SocketFactory.getSocketAdapter(config), this);

    this.Config = config;

    MMOSession.Username = config.Username;

    if (config.ServerId) {
      this._serverId = config.ServerId;
    }

    return this;
  }

  encrypt(buf: Uint8Array, offset?: number, size?: number): void {
    return this._loginCrypt.encrypt(buf, offset, size);
  }
  decrypt(buf: Uint8Array, offset?: number, size?: number): boolean {
    return this._loginCrypt.decrypt(buf, offset, size);
  }
  setKey(key: Uint8Array): void {
    return this._loginCrypt.setKey(key);
  }

  pack(lsp: SerializablePacket): Uint8Array {
    if (!lsp.Buffer || lsp.Buffer.byteLength === 0) {
      return new Uint8Array();
    }

    const pos = lsp.Buffer.byteLength + 4;
    const count = pos + (8 - (pos % 8));

    const data = new Uint8Array(count + 2);
    data.set(lsp.Buffer, 2);

    this.encrypt(data, 2, count - 2);

    data[0] = (count + 2) & 0xff;
    data[1] = (count + 2) >>> 8;

    return data;
  }

  findPacket(name: string, type: "client" | "server" = "client"): SerializablePacket | undefined {
    if (name in this.Packets.client) {
      return new SerializablePacket(name, ((this.Packets as any)[type] as any)[name].schema);
    }
  }

  sendPacket(name: string, data: Record<string, unknown> = {}): Promise<void> {
    const sp = this.findPacket(name);
    if (!sp) {
      throw new Error(`Cannot prepare sendable packet for '${name}'`);
    }
    sp.write(data);

    const sendable: Uint8Array = this.pack(sp);

    this.logger.debug("Sending", `0x${sendable[0].toString(16)} ${sp.Name}`);

    return this.sendRaw(sendable).then(() => {
      GlobalEvents.fire(`PacketSent:${sp.Name}`, { packet: sp });
    });
  }
}
