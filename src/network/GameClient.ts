import MMOConnection from "../mmocore/MMOConnection";
import MMOClient from "../mmocore/MMOClient";
import LoginClient from "./LoginClient";
import GameCrypt from "../security/crypt/GameCrypt";
import GameServerPacket from "./serverpackets/GameServerPacket";
import GamePacketHandler from "./GamePacketHandler";
import MMOConfig from "../mmocore/MMOConfig";
import NetSocket from "../mmocore/NetSocket";
import L2PcInstance from "../model/actor/instance/L2PcInstance";
import L2Npc from "../model/actor/L2Npc";
import L2ObjectCollection from "../model/L2ObjectCollection";
import L2Character from "../model/actor/L2Character";

export default class GameClient extends MMOClient<MMOConnection<GameClient>> {
  private _loginClient: LoginClient;

  private _gameCrypt: GameCrypt;

  private _config!: MMOConfig;

  private _activeChar!: L2PcInstance;

  private _creatures: L2ObjectCollection<L2Npc> = new L2ObjectCollection<L2Npc>();
  private _characters: L2ObjectCollection<L2Character> = new L2ObjectCollection<L2Character>();
  private _party: L2ObjectCollection<L2Npc> = new L2ObjectCollection<L2Npc>();
  private _pets: L2ObjectCollection<L2Npc> = new L2ObjectCollection<L2Npc>();

  get CharactersList(): L2ObjectCollection<L2Character> {
    return this._characters;
  }
  get CreaturesList(): L2ObjectCollection<L2Npc> {
    return this._creatures;
  }
  get PartyList(): L2ObjectCollection<L2Npc> {
    return this._party;
  }
  get PetList(): L2ObjectCollection<L2Npc> {
    return this._pets;
  }

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
    super(
      new MMOConnection(
        config.assign({
          //stream: Object.create(lc.Config.stream),
          stream: new NetSocket(),
          loginServerIp: lc.SelectedServer.Ipv4(),
          loginServerPort: lc.SelectedServer.Port,
        })
      )
    );

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

    this._gameCrypt.encrypt(lsp.Buffer, 0, lsp.Position);

    var sendable: Uint8Array = new Uint8Array(lsp.Position + 2);
    sendable[0] = (lsp.Position + 2) & 0xff;
    sendable[1] = (lsp.Position + 2) >>> 8;
    sendable.set(lsp.Buffer.slice(0, lsp.Position), 2);

    console.log("sending..", lsp.constructor.name);
    this.Connection.write(sendable);
  }
}
