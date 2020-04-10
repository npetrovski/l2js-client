import MMOConnection from "../mmocore/MMOConnection";
import MMOClient from "../mmocore/MMOClient";
import LoginClient from "./LoginClient";
import GameCrypt from "../security/crypt/GameCrypt";
import GameServerPacket from "./serverpackets/GameServerPacket";
import GamePacketHandler from "./GamePacketHandler";
import MMOConfig from "../mmocore/MMOConfig";
import IStream from "../mmocore/IStream";
import NetSocket from "../mmocore/NetSocket";
import L2PcInstance from "../model/actor/instance/L2PcInstance";

export default class GameClient extends MMOClient<MMOConnection<GameClient>> {
  private _loginClient: LoginClient;

  private _gameCrypt: GameCrypt;

  private _config!: MMOConfig;

  private _activeChar!: L2PcInstance;

  get PlayOk1(): number {
    return this._loginClient.PlayOk1;
  }

  get PlayOk2(): number {
    return this._loginClient.PlayOk2;
  }

  get LoginOk1(): number {
    return this._loginClient.LoginOk1;
  }

  get LoginOk2(): number {
    return this._loginClient.LoginOk2;
  }

  get Username(): string {
    return this._loginClient.Username;
  }

  get Config(): MMOConfig {
    return this._config;
  }

  set Config(config: MMOConfig) {
    this._config = config;
  }

  get ActiveChar(): L2PcInstance {
    return this._activeChar;
  }

  set ActiveChar(char: L2PcInstance) {
    this._activeChar = char;
  }

  constructor(lc: LoginClient, config: MMOConfig) {
    config.assign({
      //stream: Object.create(lc.Config.stream),
      stream: new NetSocket(),
      loginServerIp: lc.SelectedServer.Ipv4(),
      loginServerPort: lc.SelectedServer.Port,
    });
    super(new MMOConnection(config));

    this.Config = config;
    this.Connection.Client = this;
    this.PacketHandler = new GamePacketHandler();

    this._loginClient = lc;
    this._gameCrypt = new GameCrypt();
  }
  encrypt(buf: Uint8Array, offset: number, size: number): void {
    this._gameCrypt.encrypt(buf, offset, size);
  }
  decrypt(buf: Uint8Array, offset: number, size: number): void {
    this._gameCrypt.decrypt(buf, offset, size);
  }
  setCryptInitialKey(key: Uint8Array): void {
    this._gameCrypt.setKey(key);
  }

  sendPacket(lsp: GameServerPacket): void {
    lsp.write();

    var size = lsp.Buffer.byteLength;
    this._gameCrypt.encrypt(lsp.Buffer, 0, size);

    var sendable: Uint8Array = new Uint8Array(size + 2);
    sendable[0] = (size + 2) & 0xff;
    sendable[1] = (size + 2) >>> 8;
    sendable.set(lsp.Buffer, 2);

    console.log("sending..", lsp.constructor.name);
    this.Connection.write(sendable);
  }
}
