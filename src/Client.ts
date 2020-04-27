import AbstractGameCommand from "./commands/AbstractGameCommand";
import CommandAcceptJoinParty from "./commands/CommandAcceptJoinParty";
import CommandAutoShots from "./commands/CommandAutoShots";
import CommandCancelTarget from "./commands/CommandCancelTarget";
import CommandDeclineJoinParty from "./commands/CommandDeclineJoinParty";
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
import CommandTell from "./commands/CommandTell";
import CommandUseItem from "./commands/CommandUseItem";
import ICommand from "./commands/ICommand";
import L2Buff from "./entities/L2Buff";
import L2Creature from "./entities/L2Creature";
import L2DroppedItem from "./entities/L2DroppedItem";
import L2Item from "./entities/L2Item";
import L2ObjectCollection from "./entities/L2ObjectCollection";
import L2Skill from "./entities/L2Skill";
import L2User from "./entities/L2User";
import { EventHandler, GlobalEvents } from "./mmocore/EventEmitter";
import MMOClient from "./mmocore/MMOClient";
import MMOConfig from "./mmocore/MMOConfig";
import GameClient from "./network/GameClient";
import LoginClient from "./network/LoginClient";

/**
 * Lineage 2 Client
 *
 * @method say(text: string):void Send a general message
 * @method shout(text: string):void Shout a message
 * @method tell(text: string, target: string):void  Send a PM
 * @method sayToParty(text: string):void Send message to party
 * @method sayToClan(text: string):void Send message to party
 * @method sayToTrade(text: string):void Send message to party
 * @method sayToAlly(text: string):void Send message to party
 * @method moveTo(x: number, y: number, z: number):void Move to location
 * @method hit(object: L2Object | number, shift?: boolean):void Hit on target. Accepts L2Object object or ObjectId
 * @method cancelTarget():void Cancel the active target
 * @method acceptJoinParty():void Accepts the requested party invite
 * @method declineJoinParty():void Declines the requested party invite
 * @method nextTarget():void Select next/closest attackable target
 * @method inventory():void Request for inventory item list
 * @method useItem(item: L2Item | number):void Use an item. Accepts L2Item object or ObjectId
 * @method requestDuel(char?: L2Character | string):void Request player a duel. If no char is provided, the command tries to request the selected target
 * @method autoShots(item: L2Item | ShotsType | number, enable: boolean):void Enable/disable auto-shots
 */
export class Client {
  private _config: MMOConfig = new MMOConfig();

  private _lc!: LoginClient;

  private _gc!: GameClient;

  private _commands: Record<string, ICommand> = {
    say: new CommandSay(),
    shout: new CommandShout(),
    tell: new CommandTell(),
    sayToParty: new CommandSayToParty(),
    sayToClan: new CommandSayToClan(),
    sayToTrade: new CommandSayToTrade(),
    sayToAlly: new CommandSayToAlly(),

    moveTo: new CommandMoveTo(),
    hit: new CommandHit(),

    cancelTarget: new CommandCancelTarget(),

    acceptJoinParty: new CommandAcceptJoinParty(),
    declineJoinParty: new CommandDeclineJoinParty(),

    nextTarget: new CommandNextTarget(),

    inventory: new CommandInventory(),
    useItem: new CommandUseItem(),

    requestDuel: new CommandRequestDuel(),

    autoShots: new CommandAutoShots(),
  };

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

  constructor() {
    return new Proxy<Client>(this, {
      get(target: Client, propertyKey: string, receiver: any) {
        if (propertyKey in target) {
          // return (target as any)[objectKey];
          return Reflect.get(target, propertyKey, receiver);
        }
        if (propertyKey in target._commands) {
          const cmd = target._commands[propertyKey] as AbstractGameCommand<MMOClient>;
          cmd.Client = target._gc;
          return (...args: any) => {
            return cmd.execute(...args);
          };
        }
      },
    });
  }

  setConfig(config: MMOConfig | object): this {
    this._config.assign(config);
    return this;
  }

  enter(config?: MMOConfig | object): this {
    if (config) {
      this.setConfig(config);
    }

    this._lc = new LoginClient(this._config, () => {
      this._gc = new GameClient(this._lc, this._config);
    });

    return this;
  }

  on(event: string, handler: EventHandler): this {
    GlobalEvents.on(event, handler);
    return this;
  }
}
