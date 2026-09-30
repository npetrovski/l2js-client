import MMOClient from "@mmocore/MMOClient";
import MMOConfig from "@mmocore/MMOConfig";
import MMOConnection from "@mmocore/MMOConnection";
import LoginCrypt from "@network/crypt/LoginCrypt";
import LoginPacketHandler from "@network/LoginPacketHandler";
import L2Server from "@entities/L2Server";
import LoginServerPacket from "@network/outgoing/login/LoginServerPacket";
import IConnection from "@mmocore/IConnection";
import mutators from "@network/mutators/login/index";
import DefaultStreamFactory from "@network/stream/DefaultStreamFactory";
import ICrypt from "@network/crypt/ICrypt";

export default class LoginClient extends MMOClient {
  private _loginCrypt: ICrypt = new LoginCrypt();

  Servers: L2Server[] = [];
  ServerId = 1;
  Config!: MMOConfig;

  set BlowfishKey(blowfishKey: Uint8Array) {
    this._loginCrypt.setKey(blowfishKey);
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
    this.Connection = connection ?? new MMOConnection(new DefaultStreamFactory().getStream(config), this);

    this.Config = config;

    if (config.InitialBlowfishKey != null) {
      this._loginCrypt.setKey(config.InitialBlowfishKey);
    }

    this.Session.username = config.Username;

    if (config.ServerId) {
      this.ServerId = config.ServerId;
    }

    return this;
  }

  pack(lsp: LoginServerPacket): Uint8Array {
    lsp.write();

    if (!lsp.Buffer || lsp.Position === 0) {
      return new Uint8Array();
    }

    const pos = lsp.Position + 4;
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
      this.fire(`PacketSent:${lsp.constructor.name}`, { packet: lsp });
    });
  }

  encrypt(buf: Uint8Array, offset: number, size: number): void {
    this._loginCrypt.encrypt(buf, offset, size);
  }

  decrypt(buf: Uint8Array, offset: number, size: number): void {
    this._loginCrypt.decrypt(buf, offset, size);
  }
}
