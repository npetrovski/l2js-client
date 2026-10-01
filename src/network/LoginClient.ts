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

enum LoginInitEncoding {
  Unknown,
  Plaintext,
  StaticBlowfishWithXor,
}

export default class LoginClient extends MMOClient {
  private _loginCrypt: ICrypt = new LoginCrypt();
  private _loginInitEncoding = LoginInitEncoding.Unknown;

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

  selectServer(serverId: number): boolean {
    const server = this.Servers.find((entry) => entry.Id === serverId);
    if (!server) {
      return false;
    }

    this.ServerId = server.Id;
    this.Session.server = {
      host: server.Ipv4(),
      port: server.Port,
    };
    return true;
  }

  init(config: MMOConfig, connection?: IConnection): this {
    this._loginCrypt = new LoginCrypt();
    this._loginInitEncoding = LoginInitEncoding.Unknown;
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
    if (this._loginInitEncoding === LoginInitEncoding.Unknown) {
      this._loginInitEncoding = this.isPlaintextLoginInit(buf, offset, size)
        ? LoginInitEncoding.Plaintext
        : LoginInitEncoding.StaticBlowfishWithXor;
    }

    // Some L2Off login servers use asymmetric transport: client packets are
    // encrypted with the advertised dynamic key, while all server packets stay
    // plaintext. The first Init packet identifies which transport the server uses.
    if (this._loginInitEncoding === LoginInitEncoding.Plaintext) {
      return;
    }

    if ((size & 7) !== 0) {
      throw new Error(`Invalid encrypted login packet size: ${size} (body must be a multiple of 8 bytes).`);
    }

    this._loginCrypt.decrypt(buf, offset, size);
  }

  private isPlaintextLoginInit(buf: Uint8Array, offset: number, size: number): boolean {
    return (
      size >= 169 &&
      buf[offset] === 0x00 &&
      buf[offset + 5] === 0x21 &&
      buf[offset + 6] === 0xc6 &&
      buf[offset + 7] === 0x00 &&
      buf[offset + 8] === 0x00
    );
  }
}
