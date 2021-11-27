import L2Buff from "../entities/L2Buff";
import L2Creature from "../entities/L2Creature";
import L2DroppedItem from "../entities/L2DroppedItem";
import L2Item from "../entities/L2Item";
import L2Object from "../entities/L2Object";
import L2ObjectCollection from "../entities/L2ObjectCollection";
import L2PartyMember from "../entities/L2PartyMember";
import L2Skill from "../entities/L2Skill";
import L2User from "../entities/L2User";
import MMOClient from "../mmocore/MMOClient";
import MMOConfig from "../mmocore/MMOConfig";
import MMOConnection from "../mmocore/MMOConnection";
import GameCrypt from "./GameCrypt";
import GamePacketHandler from "./GamePacketHandler";
import GameServerPacket from "./outgoing/game/GameServerPacket";
import L2Recipe from "../entities/L2Recipe";
import IConnection from "../mmocore/IConnection";
import mutators from "./mutators/game/index";

class L2ClientObjectCollection<
  T extends L2Object
> extends L2ObjectCollection<T> {
  constructor(private Client: MMOClient) {
    super();
  }

  add(value: T) {
    if (!this.has(value)) {
      value.onAll((event) => {
        this.Client.fire(event.type, event.data);
      });
    }
    return super.add(value);
  }
}

export default class GameClient extends MMOClient {
  private _gameCrypt: GameCrypt = new GameCrypt();
  private _config!: MMOConfig;
  private _activeChar: L2User = new L2User();
  private _creatures: L2ObjectCollection<L2Creature> =
    new L2ClientObjectCollection(this);
  private _party: L2ClientObjectCollection<L2PartyMember> =
    new L2ClientObjectCollection(this);
  private _droppedItems: L2ClientObjectCollection<L2DroppedItem> =
    new L2ClientObjectCollection(this);
  private _items: L2ClientObjectCollection<L2Item> =
    new L2ClientObjectCollection(this);
  private _skills: L2ClientObjectCollection<L2Skill> =
    new L2ClientObjectCollection(this);
  private _dwarfRecipeBook: L2ClientObjectCollection<L2Recipe> =
    new L2ClientObjectCollection(this);
  private _commonRecipeBook: L2ClientObjectCollection<L2Recipe> =
    new L2ClientObjectCollection(this);

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

  constructor() {
    super();
    this.PacketHandler = new GamePacketHandler();

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

    return this;
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
      this.fire(`PacketSent:${gsp.constructor.name}`, { packet: gsp });
    });
  }
}
