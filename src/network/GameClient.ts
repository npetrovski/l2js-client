import L2Buff from "../entities/L2Buff";
import L2Creature from "../entities/L2Creature";
import L2DroppedItem from "../entities/L2DroppedItem";
import L2Item from "../entities/L2Item";
import L2ObjectCollection from "../entities/L2ObjectCollection";
import L2PartyMember from "../entities/L2PartyMember";
import L2Skill from "../entities/L2Skill";
import L2User from "../entities/L2User";
import { GlobalEvents } from "../mmocore/EventEmitter";
import MMOClient from "../mmocore/MMOClient";
import MMOConfig from "../mmocore/MMOConfig";
import MMOConnection from "../mmocore/MMOConnection";
import GameCrypt from "./GameCrypt";
import L2Recipe from "../entities/L2Recipe";
import IConnection from "../mmocore/IConnection";
import mutators from "./mutators/game/index";
import { default as packets } from "./packets/index";
import SocketFactory from "../socket/SocketFactory";
import PacketHandler from "./PacketHandler";
import SerializablePacket from "../mmocore/SerializablePacket";
import IPacketHandler from "../mmocore/IPacketHandler";

export default class GameClient extends MMOClient {
  private _gameCrypt: GameCrypt = new GameCrypt();
  private _config!: MMOConfig;
  private _activeChar: L2User = new L2User();
  private _creatures = new L2ObjectCollection<L2Creature>();
  private _party = new L2ObjectCollection<L2PartyMember>();
  private _droppedItems = new L2ObjectCollection<L2DroppedItem>();
  private _items = new L2ObjectCollection<L2Item>();
  private _skills = new L2ObjectCollection<L2Skill>();
  private _dwarfRecipeBook = new L2ObjectCollection<L2Recipe>();
  private _commonRecipeBook = new L2ObjectCollection<L2Recipe>();
  private _serverPacketsHandler!: IPacketHandler;
  private _clientPacketsHandler!: IPacketHandler;

  public LastConfirmMessageId!: number;
  public LastConfirmMessageRequesterId!: number;

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
    return this._activeChar.Buffs;
  }

  get SkillsList(): L2ObjectCollection<L2Skill> {
    return this._skills;
  }

  get DwarfRecipeBook(): L2ObjectCollection<L2Recipe> {
    return this._dwarfRecipeBook;
  }

  get CommonRecipeBook(): L2ObjectCollection<L2Recipe> {
    return this._commonRecipeBook;
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

  public Packets!: {
    client: { [name: string]: { prefix: string; schema: unknown } };
    server: { [name: string]: { prefix: string; schema: unknown } };
  };

  get ServerPacketsHandler(): IPacketHandler {
    if (!this._serverPacketsHandler) {
      this._serverPacketsHandler = new PacketHandler(
        Object.fromEntries(
          Object.entries((packets.game as any)[this.Protocol].server).map(([key, meta]) => {
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
          Object.entries((packets.game as any)[this.Protocol].client).map(([key, meta]) => {
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

  constructor(public Protocol: string) {
    super();
    this._creatures.add(this._activeChar);

    this.logger.debug(`Game protocol: '${Protocol}'`);

    this.Packets = (packets.game as any)[this.Protocol];

    mutators.forEach((m) => {
      const mutator = Object.create(m[0] as any, {
        Client: { value: this },
        PacketType: { value: m[1] },
      });
      this.registerMutator(mutator);
    });
  }

  reset(): void {
    this._gameCrypt = new GameCrypt();
    this._activeChar = new L2User();
    this._creatures = new L2ObjectCollection<L2Creature>();
    this._party = new L2ObjectCollection<L2PartyMember>();
    this._droppedItems = new L2ObjectCollection<L2DroppedItem>();
    this._items = new L2ObjectCollection<L2Item>();
    this._skills = new L2ObjectCollection<L2Skill>();
    this._dwarfRecipeBook = new L2ObjectCollection<L2Recipe>();
    this._commonRecipeBook = new L2ObjectCollection<L2Recipe>();
  }

  init(config: MMOConfig, connection?: IConnection): this {
    this.Connection = connection ?? new MMOConnection(SocketFactory.getSocketAdapter(config), this);

    this.Config = config;

    return this;
  }

  encrypt(buf: Uint8Array, offset?: number, size?: number): void {
    return this._gameCrypt.encrypt(buf, offset, size);
  }
  decrypt(buf: Uint8Array, offset?: number, size?: number): boolean {
    this._gameCrypt.decrypt(buf, offset, size);
    return true;
  }
  setKey(key: Uint8Array): void {
    return this._gameCrypt.setKey(key);
  }

  pack(gsp: SerializablePacket): Uint8Array {
    let buf = gsp.Buffer ?? new Uint8Array();
    const pos = buf.byteLength;

    const count = pos % 8 === 0 ? pos : pos + (8 - (pos % 8));
    if (count !== pos) {
      const data = new Uint8Array(count);
      data.set(buf, 0);
      buf = data;
    }

    this.encrypt(buf);

    const sendable: Uint8Array = new Uint8Array(count + 2);
    sendable[0] = (count + 2) & 0xff;
    sendable[1] = (count + 2) >>> 8;
    sendable.set(buf.slice(0, count), 2);

    return sendable;
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
