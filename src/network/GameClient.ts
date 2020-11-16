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
import GameCrypt from "../security/crypt/GameCrypt";
import GamePacketHandler from "./GamePacketHandler";
import GameServerPacket from "./clientpackets/GameServerPacket";
import L2Recipe from "../entities/L2Recipe";
import MMOSession from "../mmocore/MMOSession";
import IConnection from "../mmocore/IConnection";

export default class GameClient extends MMOClient {
  private _gameCrypt: GameCrypt = new GameCrypt();
  private _config!: MMOConfig;
  private _activeChar: L2User = new L2User();
  private _creatures: L2ObjectCollection<L2Creature> = new L2ObjectCollection();
  private _party: L2ObjectCollection<L2PartyMember> = new L2ObjectCollection();
  private _droppedItems: L2ObjectCollection<L2DroppedItem> = new L2ObjectCollection();
  private _items: L2ObjectCollection<L2Item> = new L2ObjectCollection();
  private _buffs: L2ObjectCollection<L2Buff> = new L2ObjectCollection();
  private _skills: L2ObjectCollection<L2Skill> = new L2ObjectCollection();
  private _dwarfRecipeBook: L2ObjectCollection<L2Recipe> = new L2ObjectCollection();
  private _commonRecipeBook: L2ObjectCollection<L2Recipe> = new L2ObjectCollection();

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

  constructor() {
    super();
    this.PacketHandler = new GamePacketHandler();
  }

  init(session: MMOSession, config: MMOConfig, connection?: IConnection): this {
    this.Connection = connection ?? new MMOConnection(config, this);

    this.Config = config;
    this.Session = session;

    return this;
  }

  encrypt(buf: Uint8Array, offset: number, size: number): void {
    this._gameCrypt.encrypt(buf, offset, size);
  }
  decrypt(buf: Uint8Array, offset: number, size: number): void {
    this._gameCrypt.decrypt(buf, offset, size);
  }
  setCryptInitialKey(key: number): void {
    this._gameCrypt.setKey(key);
  }

  pack(gsp: GameServerPacket): Uint8Array {
    gsp.write();

    this._gameCrypt.encrypt(gsp.Buffer, 0, gsp.Position);

    const sendable: Uint8Array = new Uint8Array(gsp.Position + 2);
    sendable[0] = (gsp.Position + 2) & 0xff;
    sendable[1] = (gsp.Position + 2) >>> 8;
    sendable.set(gsp.Buffer.slice(0, gsp.Position), 2);

    return sendable;
  }

  sendPacket(gsp: GameServerPacket): Promise<void> {
    const sendable: Uint8Array = this.pack(gsp);

    this.logger.debug("Sending ", gsp.constructor.name);
    return this.sendRaw(sendable).then(() => {
      GlobalEvents.fire(`PacketSent:${gsp.constructor.name}`, { packet: gsp });
    });
  }

}
