import MMOConnection from "../mmocore/MMOConnection";
import MMOClient from "../mmocore/MMOClient";
import LoginClient from "./LoginClient";
import GameCrypt from "../security/crypt/GameCrypt";
import GameServerPacket from "./serverpackets/GameServerPacket";
import GamePacketHandler from "./GamePacketHandler";
import MMOConfig from "../mmocore/MMOConfig";
import NetSocket from "../mmocore/NetSocket";
import L2User from "../entities/L2User";
import L2ObjectCollection from "../entities/L2ObjectCollection";
import L2Creature from "../entities/L2Creature";
import L2PartyMember from "../entities/L2PartyMember";
import L2Object from "../entities/L2Object";
import L2DroppedItem from "../entities/L2DroppedItem";
import L2Character from "../entities/L2Character";
import ProtocolVersion from "./serverpackets/ProtocolVersion";
import L2PartyPet from "../entities/L2PartyPet";
import L2Item from "../entities/L2Item";
import L2Buff from "../entities/L2Buff";
import L2Skill from "../entities/L2Skill";

export default class GameClient extends MMOClient {
  private _loginClient: LoginClient;

  private _gameCrypt: GameCrypt;

  private _config!: MMOConfig;

  private _activeChar: L2User = new L2User();
  private _creatures: L2ObjectCollection<L2Creature> = new L2ObjectCollection();
  private _party: L2ObjectCollection<L2PartyMember> = new L2ObjectCollection();
  private _droppedItems: L2ObjectCollection<L2DroppedItem> = new L2ObjectCollection();
  private _items: L2ObjectCollection<L2Item> = new L2ObjectCollection();
  private _buffs: L2ObjectCollection<L2Buff> = new L2ObjectCollection();
  private _skill: L2ObjectCollection<L2Skill> = new L2ObjectCollection();

  get CreaturesList(): L2ObjectCollection<L2Creature> {
    return this._creatures;
  }

  get PartyList(): L2ObjectCollection<L2PartyMember> {
    return this._party;
  }

  get DroppedItems(): L2ObjectCollection<L2DroppedItem> {
    return this._droppedItems;
  }

  get InventoryItems(): L2ObjectCollection<L2Item> {
    return this._items;
  }

  get BuffsList(): L2ObjectCollection<L2Buff> {
    return this._buffs;
  }

  get SkillsList(): L2ObjectCollection<L2Skill> {
    return this._skill;
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

  get ActiveChar(): L2User {
    return this._activeChar;
  }

  set ActiveChar(char: L2User) {
    this._activeChar = char;
  }

  constructor(lc: LoginClient, config: MMOConfig) {
    super(
      new MMOConnection(
        config.assign({
          stream: new NetSocket(),
          loginServerIp: lc.SelectedServer.Ipv4(),
          loginServerPort: lc.SelectedServer.Port,
        })
      )
    );

    this.Config = config;
    (this.Connection as MMOConnection<GameClient>).Client = this;
    this.PacketHandler = new GamePacketHandler();

    this._loginClient = lc;
    this._gameCrypt = new GameCrypt();

    this.sendPacket(new ProtocolVersion());
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

    const sendable: Uint8Array = new Uint8Array(lsp.Position + 2);
    sendable[0] = (lsp.Position + 2) & 0xff;
    sendable[1] = (lsp.Position + 2) >>> 8;
    sendable.set(lsp.Buffer.slice(0, lsp.Position), 2);

    console.log("sending..", lsp.constructor.name);
    this.Connection.write(sendable);
  }

  calculateDistance(obj1: L2Object, obj2: L2Object): number {
    return Math.sqrt((obj1.X - obj2.X) * (obj1.X - obj2.X) + (obj1.Y - obj2.Y) * (obj1.Y - obj2.Y));
  }
}
