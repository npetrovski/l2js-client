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
import GameServerPacket from "./outgoing/game/GameServerPacket";
import L2Recipe from "../entities/L2Recipe";
import MMOSession from "../mmocore/MMOSession";
import IConnection from "../mmocore/IConnection";
import GameClientPacket from "./incoming/game/GameClientPacket";
import AbnormalStatusUpdateMutator from "./mutators/game/AbnormalStatusUpdateMutator";
import AbnormalStatusUpdate from "./incoming/game/AbnormalStatusUpdate";
import CharInfoMutator from "./mutators/game/CharInfoMutator";
import CharInfo from "./incoming/game/CharInfo";
import CharSelectedMutator from "./mutators/game/CharSelectedMutator";
import CharSelected from "./incoming/game/CharSelected";
import DeleteObjectMutator from "./mutators/game/DeleteObjectMutator";
import DeleteObject from "./incoming/game/DeleteObject";
import DieMutator from "./mutators/game/DieMutator";
import Die from "./incoming/game/Die";
import DropItemMutator from "./mutators/game/DropItemMutator";
import DropItem from "./incoming/game/DropItem";
import EtcStatusUpdateMutator from "./mutators/game/EtcStatusUpdateMutator";
import EtcStatusUpdate from "./incoming/game/EtcStatusUpdate";
import ExQuestItemListMutator from "./mutators/game/ExQuestItemListMutator";
import ExQuestItemList from "./incoming/game/ExQuestItemList";
import ExVoteSystemInfoMutator from "./mutators/game/ExVoteSystemInfoMutator";
import ExVoteSystemInfo from "./incoming/game/ExVoteSystemInfo";
import InventoryUpdateMutator from "./mutators/game/InventoryUpdateMutator";
import InventoryUpdate from "./incoming/game/InventoryUpdate";
import ItemListMutator from "./mutators/game/ItemListMutator";
import ItemList from "./incoming/game/ItemList";
import KeyPacketMutator from "./mutators/game/KeyPacketMutator";
import KeyPacket from "./incoming/game/KeyPacket";
import MagicSkillUseMutator from "./mutators/game/MagicSkillUseMutator";
import MagicSkillUse from "./incoming/game/MagicSkillUse";
import MoveToLocationMutator from "./mutators/game/MoveToLocationMutator";
import MoveToLocation from "./incoming/game/MoveToLocation";
import MoveToPawnMutator from "./mutators/game/MoveToPawnMutator";
import MoveToPawn from "./incoming/game/MoveToPawn";
import MyTargetSelectedMutator from "./mutators/game/MyTargetSelectedMutator";
import MyTargetSelected from "./incoming/game/MyTargetSelected";
import PartyMemberPositionMutator from "./mutators/game/PartyMemberPositionMutator";
import PartyMemberPosition from "./incoming/game/PartyMemberPosition";
import PartySmallWindowAddMutator from "./mutators/game/PartySmallWindowAddMutator";
import PartySmallWindowAdd from "./incoming/game/PartySmallWindowAdd";
import PartySmallWindowAllMutator from "./mutators/game/PartySmallWindowAllMutator";
import PartySmallWindowAll from "./incoming/game/PartySmallWindowAll";
import PartySmallWindowDeleteMutator from "./mutators/game/PartySmallWindowDeleteMutator";
import PartySmallWindowDelete from "./incoming/game/PartySmallWindowDelete";
import PartySmallWindowDeleteAllMutator from "./mutators/game/PartySmallWindowDeleteAllMutator";
import PartySmallWindowDeleteAll from "./incoming/game/PartySmallWindowDeleteAll";
import PartySmallWindowUpdateMutator from "./mutators/game/PartySmallWindowUpdateMutator";
import PartySmallWindowUpdate from "./incoming/game/PartySmallWindowUpdate";
import PartySpelledMutator from "./mutators/game/PartySpelledMutator";
import PartySpelled from "./incoming/game/PartySpelled";
import RecipeBookItemListMutator from "./mutators/game/RecipeBookItemListMutator";
import RecipeBookItemList from "./incoming/game/RecipeBookItemList";
import ReviveMutator from "./mutators/game/ReviveMutator";
import Revive from "./incoming/game/Revive";
import SetupGaugeMutator from "./mutators/game/SetupGaugeMutator";
import SetupGauge from "./incoming/game/SetupGauge";
import SkillCoolTimeMutator from "./mutators/game/SkillCoolTimeMutator";
import SkillCoolTime from "./incoming/game/SkillCoolTime";
import SkillListMutator from "./mutators/game/SkillListMutator";
import SkillList from "./incoming/game/SkillList";
import SpawnItemMutator from "./mutators/game/SpawnItemMutator";
import SpawnItem from "./incoming/game/SpawnItem";
import StatusUpdateMutator from "./mutators/game/StatusUpdateMutator";
import StatusUpdate from "./incoming/game/StatusUpdate";
import StopMoveMutator from "./mutators/game/StopMoveMutator";
import StopMove from "./incoming/game/StopMove";
import TargetSelectedMutator from "./mutators/game/TargetSelectedMutator";
import TargetSelected from "./incoming/game/TargetSelected";
import TargetUnselectedMutator from "./mutators/game/TargetUnselectedMutator";
import TargetUnselected from "./incoming/game/TargetUnselected";
import TeleportToLocationMutator from "./mutators/game/TeleportToLocationMutator";
import TeleportToLocation from "./incoming/game/TeleportToLocation";
import UserInfoMutator from "./mutators/game/UserInfoMutator";
import UserInfo from "./incoming/game/UserInfo";
import ValidateLocationMutator from "./mutators/game/ValidateLocationMutator";
import ValidateLocation from "./incoming/game/ValidateLocation";
import NpcInfoMutator from "./mutators/game/NpcInfoMutator";
import NpcInfo from "./incoming/game/NpcInfo";
import ChangeWaitTypeMutator from "./mutators/game/ChangeWaitTypeMutator";
import ChangeWaitType from "./incoming/game/ChangeWaitType";

export default class GameClient extends MMOClient {
  private _gameCrypt: GameCrypt = new GameCrypt();
  private _config!: MMOConfig;
  private _activeChar: L2User = new L2User();
  private _creatures: L2ObjectCollection<L2Creature> = new L2ObjectCollection();
  private _party: L2ObjectCollection<L2PartyMember> = new L2ObjectCollection();
  private _droppedItems: L2ObjectCollection<
    L2DroppedItem
  > = new L2ObjectCollection();
  private _items: L2ObjectCollection<L2Item> = new L2ObjectCollection();
  private _skills: L2ObjectCollection<L2Skill> = new L2ObjectCollection();
  private _dwarfRecipeBook: L2ObjectCollection<
    L2Recipe
  > = new L2ObjectCollection();
  private _commonRecipeBook: L2ObjectCollection<
    L2Recipe
  > = new L2ObjectCollection();

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
  }

  init(config: MMOConfig, connection?: IConnection): this {
    this.Connection = connection ?? new MMOConnection(config, this);

    this.Config = config;

    this.registerMutator(
      new AbnormalStatusUpdateMutator(this, AbnormalStatusUpdate)
    );
    this.registerMutator(new CharInfoMutator(this, CharInfo));
    this.registerMutator(new ChangeWaitTypeMutator(this, ChangeWaitType));
    this.registerMutator(new CharSelectedMutator(this, CharSelected));
    this.registerMutator(new DeleteObjectMutator(this, DeleteObject));
    this.registerMutator(new DieMutator(this, Die));
    this.registerMutator(new DropItemMutator(this, DropItem));
    this.registerMutator(new EtcStatusUpdateMutator(this, EtcStatusUpdate));
    this.registerMutator(new ExQuestItemListMutator(this, ExQuestItemList));
    this.registerMutator(new ExVoteSystemInfoMutator(this, ExVoteSystemInfo));
    this.registerMutator(new InventoryUpdateMutator(this, InventoryUpdate));
    this.registerMutator(new ItemListMutator(this, ItemList));
    this.registerMutator(new KeyPacketMutator(this, KeyPacket));
    this.registerMutator(new MagicSkillUseMutator(this, MagicSkillUse));
    this.registerMutator(new MoveToLocationMutator(this, MoveToLocation));
    this.registerMutator(new MoveToPawnMutator(this, MoveToPawn));
    this.registerMutator(new MyTargetSelectedMutator(this, MyTargetSelected));
    this.registerMutator(new NpcInfoMutator(this, NpcInfo));
    this.registerMutator(
      new PartyMemberPositionMutator(this, PartyMemberPosition)
    );
    this.registerMutator(
      new PartySmallWindowAddMutator(this, PartySmallWindowAdd)
    );
    this.registerMutator(
      new PartySmallWindowAllMutator(this, PartySmallWindowAll)
    );
    this.registerMutator(
      new PartySmallWindowDeleteMutator(this, PartySmallWindowDelete)
    );
    this.registerMutator(
      new PartySmallWindowDeleteAllMutator(this, PartySmallWindowDeleteAll)
    );
    this.registerMutator(
      new PartySmallWindowUpdateMutator(this, PartySmallWindowUpdate)
    );
    this.registerMutator(new PartySpelledMutator(this, PartySpelled));
    this.registerMutator(
      new RecipeBookItemListMutator(this, RecipeBookItemList)
    );
    this.registerMutator(new ReviveMutator(this, Revive));
    this.registerMutator(new SetupGaugeMutator(this, SetupGauge));
    this.registerMutator(new SkillCoolTimeMutator(this, SkillCoolTime));
    this.registerMutator(new SkillListMutator(this, SkillList));
    this.registerMutator(new SpawnItemMutator(this, SpawnItem));
    this.registerMutator(new StatusUpdateMutator(this, StatusUpdate));
    this.registerMutator(new StopMoveMutator(this, StopMove));
    this.registerMutator(new TargetSelectedMutator(this, TargetSelected));
    this.registerMutator(new TargetUnselectedMutator(this, TargetUnselected));
    this.registerMutator(
      new TeleportToLocationMutator(this, TeleportToLocation)
    );
    this.registerMutator(new UserInfoMutator(this, UserInfo));
    this.registerMutator(new ValidateLocationMutator(this, ValidateLocation));

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
      GlobalEvents.fire(`PacketSent:${gsp.constructor.name}`, { packet: gsp });
    });
  }
}
