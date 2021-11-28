import L2Buff from "../entities/L2Buff";
import L2Creature from "../entities/L2Creature";
import L2DroppedItem from "../entities/L2DroppedItem";
import L2Item from "../entities/L2Item";
import L2ObjectCollection from "../entities/L2ObjectCollection";
import L2ClientObjectCollection from "../entities/L2ClientObjectCollection";
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
import SocketFactory from "../socket/SocketFactory";

export default class GameClient extends MMOClient {
  private _gameCrypt: GameCrypt = new GameCrypt();
  Config!: MMOConfig;
  ActiveChar: L2User = new L2User();
  CreaturesList: L2ObjectCollection<L2Creature> = new L2ClientObjectCollection(this);
  PartyList: L2ClientObjectCollection<L2PartyMember> = new L2ClientObjectCollection(this);
  DroppedItems: L2ClientObjectCollection<L2DroppedItem> = new L2ClientObjectCollection(this);
  InventoryItems: L2ClientObjectCollection<L2Item> = new L2ClientObjectCollection(this);
  SkillsList: L2ClientObjectCollection<L2Skill> = new L2ClientObjectCollection(this);
  DwarfRecipeBook: L2ClientObjectCollection<L2Recipe> = new L2ClientObjectCollection(this);
  CommonRecipeBook: L2ClientObjectCollection<L2Recipe> = new L2ClientObjectCollection(this);

  LastConfirmMessageId!: number;
  LastConfirmMessageRequesterId!: number;

  get BuffsList(): L2ObjectCollection<L2Buff> {
    return this.ActiveChar.Buffs;
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
    this.Connection = connection ?? new MMOConnection(SocketFactory.getSocketAdapter(config), this);

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
