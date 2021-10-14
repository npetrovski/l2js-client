import AbstractGameCommand from "./commands/AbstractGameCommand";
import CommandAcceptJoinParty from "./commands/CommandAcceptJoinParty";
import CommandAutoShots from "./commands/CommandAutoShots";
import CommandCancelBuff from "./commands/CommandCancelBuff";
import CommandCancelTarget from "./commands/CommandCancelTarget";
import CommandDeclineJoinParty from "./commands/CommandDeclineJoinParty";
import CommandDropItem from "./commands/CommandDropItem";
import CommandHit from "./commands/CommandHit";
import CommandInventory from "./commands/CommandInventory";
import CommandMoveTo from "./commands/CommandMoveTo";
import CommandNextTarget from "./commands/CommandNextTarget";
import CommandRequestDuel from "./commands/CommandRequestDuel";
import CommandSay from "./commands/CommandSay";
import CommandSayToAlly from "./commands/CommandSayToAlly";
import CommandSayToClan from "./commands/CommandSayToClan";
import CommandSayToParty from "./commands/CommandSayToParty";
import CommandSayToTrade from "./commands/CommandSayToTrade";
import CommandShout from "./commands/CommandShout";
import CommandSitStand from "./commands/CommandSitStand";
import CommandTell from "./commands/CommandTell";
import CommandUseItem from "./commands/CommandUseItem";
import ICommand from "./commands/ICommand";
import L2Buff from "./entities/L2Buff";
import L2Character from "./entities/L2Character";
import L2Creature from "./entities/L2Creature";
import L2DroppedItem from "./entities/L2DroppedItem";
import L2Item from "./entities/L2Item";
import L2Object from "./entities/L2Object";
import L2ObjectCollection from "./entities/L2ObjectCollection";
import L2Skill from "./entities/L2Skill";
import L2User from "./entities/L2User";
import { ShotsType } from "./enums/ShotsType";
import { EventHandler, GlobalEvents } from "./mmocore/EventEmitter";
import MMOClient from "./mmocore/MMOClient";
import MMOConfig from "./mmocore/MMOConfig";
import GameClient from "./network/GameClient";
import LoginClient from "./network/LoginClient";
import CommandValidatePosition from "./commands/CommandValidatePosition";
import CommandAttack from "./commands/CommandAttack";
import {
  ELoggedIn,
  EPacketReceived,
  EventHandlerType
} from "./events/EventTypes";
import CommandCast from "./commands/CommandCast";
import CommandDwarvenCraftRecipes from "./commands/CommandDwarvenCraftRecipes";
import CommandCraft from "./commands/CommandCraft";
import L2Recipe from "./entities/L2Recipe";
import AuthGameGuard from "./network/outgoing/login/AuthGameGuard";
import RequestAuthLogin from "./network/outgoing/login/RequestAuthLogin";
import RequestServerList from "./network/outgoing/login/RequestServerList";
import RequestServerLogin from "./network/outgoing/login/RequestServerLogin";
import ServerList from "./network/incoming/login/ServerList";
import RequestManorList from "./network/outgoing/game/RequestManorList";
import RequestKeyMapping from "./network/outgoing/game/RequestKeyMapping";
import EnterWorld from "./network/outgoing/game/EnterWorld";
import ProtocolVersion from "./network/outgoing/game/ProtocolVersion";
import AuthLogin from "./network/outgoing/game/AuthLogin";
import CharacterSelect from "./network/outgoing/game/CharacterSelect";
import Appearing from "./network/outgoing/game/Appearing";
import PlayFail from "./network/incoming/login/PlayFail";
import LoginFail from "./network/incoming/login/LoginFail";
import CommandRevive from "./commands/CommandRevive";
import { RestartPoint } from "./enums/RestartPoint";
import SystemMessage from "./network/incoming/game/SystemMessage";
import CommandAcceptResurrect from "./commands/CommandAcceptResurrect";
import CommandDeclineResurrect from "./commands/CommandDeclineResurrect";

export default interface Client {
  /**
   * Send a general message
   * @param text
   */
  say(text: string): void;
  /**
   * Shout a message
   * @param text
   */
  shout(text: string): void;
  /**
   * Send a PM
   * @param text
   * @param target
   */
  tell(text: string, target: string): void;
  /**
   * Send message to party
   * @param text
   */
  sayToParty(text: string): void;
  /**
   * Send message to clan
   * @param text
   */
  sayToClan(text: string): void;
  /**
   * Send message to trade
   * @param text
   */
  sayToTrade(text: string): void;
  /**
   * Send message to ally
   * @param text
   */
  sayToAlly(text: string): void;
  /**
   * Move to location
   * @param x
   * @param y
   * @param z
   */
  moveTo(x: number, y: number, z: number): void;
  /**
   * Drop an item at location
   * @param ItemObjectId
   * @param ItemsCount
   * @param x
   * @param y
   * @param z
   */
  dropItem(
    objectId: number,
    count: number,
    x?: number,
    y?: number,
    z?: number
  ): void;
  /**
   * Hit on target. Accepts L2Object object or ObjectId
   * @param object
   * @param shift
   */
  hit(object: L2Object | number, shift?: boolean): void;
  /**
   * Attack a target
   * @param object
   * @param shift
   */
  attack(object: L2Object | number, shift?: boolean): void;
  /**
   * Cancel the active target
   */
  cancelTarget(): void;
  /**
   * Accepts the requested party invite
   */
  acceptJoinParty(): void;
  /**
   * Declines the requested party invite
   */
  declineJoinParty(): void;
  /**
   * Select next/closest attackable target
   */
  nextTarget(): L2Creature | undefined;
  /**
   * Request for inventory item list
   */
  inventory(): void;
  /**
   * Use an item. Accepts L2Item object or ObjectId
   * @param item
   */
  useItem(item: L2Item | number): void;
  /**
   * Request player a duel. If no char is provided, the command tries to request the selected target
   * @param char
   */
  requestDuel(char?: L2Character | string): void;
  /**
   * Enable/disable auto-shots
   * @param item
   * @param enable
   */
  autoShots(item: L2Item | ShotsType | number, enable: boolean): void;
  /**
   * Cancel a buff
   * @param object
   * @param buff
   * @param level
   */
  cancelBuff(
    object: L2Character | number,
    buff: L2Buff | number,
    level?: number
  ): void;
  /**
   * Sit or stand
   */
  sitOrStand(): void;
  /**
   * Sync position with server
   */
  validatePosition(): void;
  /**
   * Cast a magic skill
   * @param magicId
   * @param ctrl
   * @param shift
   */
  cast(magicSkillId: number, ctrl?: boolean, shift?: boolean): void;
  /**
   * Open dwarven craft recipe book
   */
  dwarvenCraftRecipes(): void;
  /**
   * Craft an item
   * @param recipeId
   */
  craft(recipeId: number): void;
  /**
   * Revive to location
   * @param where
   */
  revive(where: RestartPoint): void;
  /**
   * Accept resurrect request
   */
  acceptResurrect(): void;
  /**
   * Decline resurrect request
   */
  declineResurrect(): void;
}

/**
 * Lineage 2 Client
 */
export default class Client {
  private _config: MMOConfig = new MMOConfig();

  private _lc: LoginClient = new LoginClient();

  private _gc: GameClient = new GameClient();

  private _commands: Record<string, ICommand> = {
    say: CommandSay.prototype,
    shout: CommandShout.prototype,
    tell: CommandTell.prototype,
    sayToParty: CommandSayToParty.prototype,
    sayToClan: CommandSayToClan.prototype,
    sayToTrade: CommandSayToTrade.prototype,
    sayToAlly: CommandSayToAlly.prototype,

    moveTo: CommandMoveTo.prototype,
    hit: CommandHit.prototype,
    attack: CommandAttack.prototype,
    dropItem: CommandDropItem.prototype,
    cancelTarget: CommandCancelTarget.prototype,

    acceptJoinParty: CommandAcceptJoinParty.prototype,
    declineJoinParty: CommandDeclineJoinParty.prototype,

    nextTarget: CommandNextTarget.prototype,

    inventory: CommandInventory.prototype,
    useItem: CommandUseItem.prototype,

    requestDuel: CommandRequestDuel.prototype,

    autoShots: CommandAutoShots.prototype,

    cancelBuff: CommandCancelBuff.prototype,
    sitOrStand: CommandSitStand.prototype,

    validatePosition: CommandValidatePosition.prototype,

    cast: CommandCast.prototype,

    dwarvenCraftRecipes: CommandDwarvenCraftRecipes.prototype,

    craft: CommandCraft.prototype,

    revive: CommandRevive.prototype,

    acceptResurrect: CommandAcceptResurrect.prototype,
    declineResurrect: CommandDeclineResurrect.prototype
  };

  get LoginClient(): LoginClient {
    return this._lc;
  }

  get GameClient(): GameClient {
    return this._gc;
  }

  get Me(): L2User {
    return this._gc?.ActiveChar;
  }

  get CreaturesList(): L2ObjectCollection<L2Creature> {
    return this._gc?.CreaturesList;
  }

  get PartyList(): L2ObjectCollection<L2Creature> {
    return this._gc?.PartyList;
  }

  get DroppedItems(): L2ObjectCollection<L2DroppedItem> {
    return this._gc?.DroppedItems;
  }
  get InventoryItems(): L2ObjectCollection<L2Item> {
    return this._gc?.InventoryItems;
  }
  get BuffsList(): L2ObjectCollection<L2Buff> {
    return this._gc?.BuffsList;
  }
  get SkillsList(): L2ObjectCollection<L2Skill> {
    return this._gc?.SkillsList;
  }
  get DwarfRecipeBook(): L2ObjectCollection<L2Recipe> {
    return this._gc?.DwarfRecipeBook;
  }
  get CommonRecipeBook(): L2ObjectCollection<L2Recipe> {
    return this._gc?.CommonRecipeBook;
  }

  constructor() {
    return new Proxy<Client>(this, {
      get(target: Client, propertyKey: string, receiver: any) {
        if (propertyKey in target) {
          // return (target as any)[objectKey];
          return Reflect.get(target, propertyKey, receiver);
        }
        if (propertyKey in target._commands) {
          const cmd = Object.create(
            target._commands[propertyKey] as AbstractGameCommand<MMOClient>
          );
          cmd.Client = target._gc;
          return (...args: any) => {
            return cmd.execute(...args);
          };
        }
      }
    });
  }

  registerCommand(commandName: string, commandHandler: ICommand): this {
    if (commandName in this._commands) {
      throw new Error(`Command ${commandName} is already registered.`);
    }
    this._commands[commandName] = commandHandler;
    return this;
  }

  setConfig(config: MMOConfig | Record<string, unknown>): this {
    this._config = { ...new MMOConfig(), ...(config as MMOConfig) };
    return this;
  }

  enter(
    config?: Record<string, unknown>
  ): Promise<{ login: LoginClient; game: GameClient }> {
    if (config) {
      this.setConfig(config);
    }

    return new Promise((resolve, reject) => {
      this.LoginClient.init(this._config);
      this.LoginClient.connect()
        .then(() => {
          GlobalEvents.once("PacketReceived:PlayFail", (e: EPacketReceived) => {
            reject((e.data.packet as PlayFail).FailReason);
          });
          GlobalEvents.once(
            "PacketReceived:LoginFail",
            (e: EPacketReceived) => {
              reject((e.data.packet as LoginFail).FailReason);
            }
          );
          GlobalEvents.once("PacketReceived:Init", () =>
            this.LoginClient.sendPacket(
              new AuthGameGuard(this.LoginClient.Session.sessionId)
            )
          );
          GlobalEvents.once("PacketReceived:GGAuth", () =>
            this.LoginClient.sendPacket(
              new RequestAuthLogin(
                this._config.Username,
                this._config.Password,
                this.LoginClient.Session
              )
            )
          );
          GlobalEvents.once("PacketReceived:LoginOk", () =>
            this.LoginClient.sendPacket(
              new RequestServerList(this.LoginClient.Session)
            )
          );
          GlobalEvents.once(
            "PacketReceived:ServerList",
            (e: EPacketReceived) => {
              this.LoginClient.sendPacket(
                new RequestServerLogin(
                  this.LoginClient.Session,
                  this.LoginClient.ServerId ??
                    (e.data.packet as ServerList).LastServerId
                )
              );
            }
          );
          GlobalEvents.once("PacketReceived:PlayOk", () => {
            this.LoginClient.Connection.close();
            const gameConfig = {
              ...this._config,
              ...{
                Ip: this.LoginClient.Session.server.host,
                Port: this.LoginClient.Session.server.port
              }
            };
            this.GameClient.Session = this.LoginClient.Session;
            this.GameClient.init(gameConfig as MMOConfig);
            this.GameClient.connect()
              .then(() => this.GameClient.sendPacket(new ProtocolVersion()))
              .catch(e => reject(e));
          });
          GlobalEvents.once("PacketReceived:KeyPacket", () =>
            this.GameClient.sendPacket(new AuthLogin(this.GameClient.Session))
          );
          GlobalEvents.once("PacketReceived:CharSelectionInfo", () =>
            this.GameClient.sendPacket(
              new CharacterSelect(this.GameClient.Config.CharSlotIndex ?? 0)
            )
          );
          GlobalEvents.once("PacketReceived:CharSelected", () => {
            this.GameClient.sendPacket(new RequestManorList())
              .then(() => this.GameClient.sendPacket(new RequestKeyMapping()))
              .then(() => this.GameClient.sendPacket(new EnterWorld()))
              .catch(e => reject("Enter world fail." + e));
          });

          GlobalEvents.on(
            "PacketReceived:SystemMessage",
            (e: EPacketReceived) => {
              if (
                (e.data.packet as SystemMessage).messageId ===
                34 /** WELCOME_TO_LINEAGE */
              ) {
                const param = {
                  login: this.LoginClient,
                  game: this.GameClient
                };
                GlobalEvents.fire("LoggedIn", param);
                resolve(param);
              }
            }
          );

          GlobalEvents.on("PacketReceived:TeleportToLocation", () =>
            this.GameClient.sendPacket(new Appearing())
          );
        })
        .catch(e => reject(e));
    });
  }

  private ___event_params(
    ...params: EventHandlerType
  ): { type: string; handler: EventHandler } {
    let type: string;
    let handler: any;
    if (params.length >= 3) {
      type = `${params[0]}:${params[1]}`;
      handler = params[2];
    } else {
      type = params[0];
      handler = params[1];
    }

    return { type, handler };
  }

  on(...params: EventHandlerType): this {
    const c = this.___event_params(...params);
    GlobalEvents.on(c.type, c.handler);
    return this;
  }

  once(...params: EventHandlerType): this {
    const c = this.___event_params(...params);
    GlobalEvents.once(c.type, c.handler);
    return this;
  }

  off(...params: EventHandlerType): this {
    const c = this.___event_params(...params);
    GlobalEvents.off(c.type, c.handler);
    return this;
  }
}
